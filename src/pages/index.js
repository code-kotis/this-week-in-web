import React from 'react'
import get from 'lodash/get'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ContentLeft from '../components/contentLeft'
import ContentRight from '../components/contentRight'

export default class IndexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <SEO
          title={siteTitle}
          keywords={[`this-week-in-web`, `this week in web`, `weekly web`]}
        />
        <ContentLeft siteTitle="this week in web" />
        <ContentRight>
          <div className="issue">
            <div className="issue__preview-info issue__preview-info--small">
              <h2 className="title">{'All Issues'}</h2>
            </div>
            <h2 className="line" />
            <div className="issue__preview-content">
              {posts.map(({ node }, index) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                return (
                  <div className="issue__item" key={title}>
                    <div className="issue__info">
                      <span className="issue__no">Issue: {index + 1}</span>
                      <time className="issue__date">
                        {node.frontmatter.date}
                      </time>
                    </div>
                    <Link
                      to={`issues${node.fields.slug}`}
                      className="issue__title"
                    >
                      {title}
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </ContentRight>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMM, YYYY")
            title
          }
        }
      }
    }
  }
`
