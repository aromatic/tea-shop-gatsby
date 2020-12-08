module.exports = {
  siteMetadata: {
    title: "Aroma Tea"
  },
  plugins: [
      'gatsby-plugin-netlify-cms',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'blog',
          path: 'src/blog'
        }
      },
      'gatsby-transformer-remark'
    ]
};
