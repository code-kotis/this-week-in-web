import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'

import ContentLeft from '../components/contentLeft'
import ContentRight from '../components/contentRight'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <ContentLeft />
      <ContentRight>
        <div className="issue">
          <Link to="/" className="issue__preview-back">
            ← All Issues
          </Link>
          <div className="issue__preview-info">
            <h2 className="title">{frontmatter.title}</h2>
            <time>{frontmatter.date}</time>
          </div>
          <h2 className="line" />
          <div
            className="issue__preview-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </ContentRight>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IssueByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
