module.exports = {
  siteMetadata: {
    title: `This Week In Web`,
    description: `Get weekly coverage about what's happening in web community. No spams.`,
    author: `Code Kotis`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages/issues/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `this-week-in-web`,
        short_name: `this-week-in-web`,
        start_url: `/`,
        background_color: `#FAFAFA`,
        theme_color: `#f3e48e`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
  ],
}
