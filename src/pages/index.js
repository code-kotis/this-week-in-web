import React from 'react'
import get from 'lodash/get'
import groupBy from 'lodash/groupBy'
import { Link, graphql } from 'gatsby'
import { getMonthName } from '../utils/date'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ContentLeft from '../components/contentLeft'
import ContentRight from '../components/contentRight'

const getGroupedPosts = ( posts, type /*year or month */) => {
  posts = posts.filter(p => get(p, 'node.frontmatter.published'))
  return groupBy(posts, p => {
    const publishedDate = new Date(get(p, 'node.frontmatter.date'));
    const groupName =  type === 'month' ? publishedDate.getMonth() : publishedDate.getFullYear();
    return groupName;
  })
}
export default class IndexPage extends React.Component {
  renderMonths(group, year) {
    return (
      Object.keys(group)
      .reverse()
      .map(month => {
        let monthName = getMonthName(month)
        let key = `${monthName}_${year}`;
        let monthPosts = group[month]
        return (
          <div key={key} className="issues__preview-content">
            {monthPosts.length > 0 && <div className="issues__month">{monthName} - {year}</div>}
            {monthPosts.map(({ node }, index) => {
              const title = get(node, 'frontmatter.title', node.fields.slug)
              const published = get(node, 'frontmatter.published')
              const contentTitle = get(node, 'frontmatter.contentTitle')
              if (!published) return null
              return (
                <div className="issues__item" key={node.fields.slug}>
                  <Link to={`/issues${node.fields.slug}`} className="issues__title">
                    <div className="issues__info">
                      <h3 className="issues_no">{title.replace('#', '')}</h3>
                      <time className="issues__date">{node.frontmatter.date}</time>
                    </div>
                    <p>{contentTitle}</p>
                  </Link>
                </div>
              )
            })}
          </div>
        )
      })
    )
  }

  renderYears(groupedPosts) {
    return (
      Object.keys(groupedPosts).reverse().map(year => {
        return this.renderMonths(groupedPosts[year], year);
      })
    )
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const groupedPosts = getGroupedPosts(posts, 'year')

    for(let year of Object.keys(groupedPosts)) {
      const group = groupedPosts[year];
      groupedPosts[year] = getGroupedPosts(group, 'month');
    }

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
            { this.renderYears(groupedPosts) } 
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
