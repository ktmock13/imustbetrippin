module.exports = {
  siteMetadata: {
    title: "I must be trippin'",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    `gatsby-plugin-react-next`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sass',
  ],
}
