module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/announcements`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    `gatsby-transformer-csv`,
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
};
