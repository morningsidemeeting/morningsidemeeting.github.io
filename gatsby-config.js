module.exports = {
  pathPrefix: "/website",
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/announcements`,
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Morningside Monthly Meeting`,
    author: `My Name`,
    description: `A welcoming community dedicated to the Quaker testimonies of equality, integrity, simplicity, and peace.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
}
