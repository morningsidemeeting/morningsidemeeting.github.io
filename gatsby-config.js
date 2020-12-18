const path = require(`path`);
module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: path.join(__dirname, `src`, `data`),
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-csv`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    url: `https://morningsidemeeting.github.io/`,
    image: "/images/ny_riverside_church.jpg",
    title: `Morningside Monthly Meeting`,
    titleTemplate: "%s · FRIENDS.",
    author: `My Name`,
    description: `A welcoming community dedicated to the Quaker testimonies of equality, integrity, simplicity, and peace.`,
    social: [
      {
        name: `facebook`,
        url: `https://www.facebook.com/MorningsideQuakers`,
      },
      {
        name: `github`,
        url: `https://github.com/morningsidequakermeeting`,
      },
    ],
  },
};
