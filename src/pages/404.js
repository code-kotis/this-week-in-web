import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ContentLeft from '../components/contentLeft'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ContentLeft />
    <div className="content__right">
      <h1>NOT FOUND :(</h1>
    </div>
  </Layout>
)

export default NotFoundPage
