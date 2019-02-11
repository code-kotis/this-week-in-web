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
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <SEO title={siteTitle} keywords={[siteDescription]} />
        <ContentLeft siteTitle={siteTitle} />
        <ContentRight>
          <div className="issues">
            <div className="issues__preview-info issue__preview-info--small">
              <h2 className="title">All Issues</h2>
            </div>
            <div className="line" />
            <div className="issues__preview-content">
              {posts.map(({ node }, index) => {
                const title = get(node, 'frontmatter.title') || node.fields.slug
                const published = get(node, 'frontmatter.published')
                const contentTitle = get(node, 'frontmatter.contentTitle')
                if (!published) return null
                return (
                  <div className="issues__item" key={title}>
                    <div className="issues__info">
                      <h3 className="issues_no">Issue: {index + 1}</h3>
                      <time className="issues__date">
                        {node.frontmatter.date}
                      </time>
                    </div>
                    <Link
                      to={`issues${node.fields.slug}`}
                      className="issues__title"
                    >
                      {contentTitle}
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
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMM, YYYY")
            title
            published
            contentTitle
          }
        }
      }
    }
  }
`
