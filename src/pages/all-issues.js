import React from 'react'
import get from 'lodash/get'
import groupBy from 'lodash/groupBy'
import { Link } from 'gatsby'
import { getMonthName } from '../utils/date'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ContentLeft from '../components/contentLeft'
import ContentRight from '../components/contentRight'

export default class IndexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const groupedPosts = groupBy(posts, p => {
      return new Date(get(p, 'node.frontmatter.date')).getMonth()
    })
    return (
      <Layout>
        <SEO title={`${siteDescription}`} keywords={[siteDescription]} />
        <ContentLeft siteTitle={siteTitle} />
        <ContentRight>
          <div className="issues">
            <div className="issues__preview-info issue__preview-info--small">
              <h2 className="title">All Issues</h2>
            </div>
            <div className="line" />
            {Object.keys(groupedPosts)
              .reverse()
              .map(month => {
                let monthName = getMonthName(month)
                let monthPosts = groupedPosts[month]
                return (
                  <div key={monthName} className="issues__preview-content">
                    <div className="issues__month">{monthName}</div>
                    {monthPosts.map(({ node }, index) => {
                      const title = get(node, 'frontmatter.title', node.fields.slug)
                      const published = get(node, 'frontmatter.published')
                      const contentTitle = get(node, 'frontmatter.contentTitle')
                      if (!published) return null
                      return (
                        <div className="issues__item" key={node.fields.slug}>
                          <div className="issues__info">
                            <h3 className="issues_no">{title.replace('#', '')}</h3>
                            <time className="issues__date">{node.frontmatter.date}</time>
                          </div>
                          <Link to={`/issues${node.fields.slug}`} className="issues__title">
                            {contentTitle}
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                )
              })}
          </div>
        </ContentRight>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query AllIssuesQuery {
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
