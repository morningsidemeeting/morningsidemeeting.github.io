# Website of the Morningside Monthly Meeting of the Religious Society of Friends

## Developer's Guide

The Morningside Website was built by [Scott Blumenthal](https://github.com/blumysden) using a basic install of [Gatsby.js](https://www.gatsbyjs.com/) with the `gatsby-starter-blog-theme`. It also uses the following Gatsby plugins:

- `gatsby-image` ([documentation](https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-image/))
- `gatsby-background-image` ([documentation](https://www.gatsbyjs.com/plugins/gatsby-background-image/))
- `gatsby-source-filesystem` ([documentation](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/))
- `gatsby-transformer-csv` ([documentation](https://www.gatsbyjs.com/plugins/gatsby-transformer-csv/))

It is deployed to GitHub Pages via the [Gatsby Publsh workflow](https://github.com/marketplace/actions/gatsby-publish).

It was developed using Node 12.17.0. (The repo includes an `.nvmrc` file.)

## Managing the Domain Name

TK: The website will rely on the Gatsby Publish workflow to set the correct CNAME, as [specified in the documentation](https://github.com/marketplace/actions/gatsby-publish#cname).

## Contributor's Guide

### Footer

Quotes for the footer are selected at random each time a page loaded. The quotes themselves are listed in `/src/data/quotes.json`. You can add quotes to the array using the following format:

```
{
  "quote": "Our life is love, and peace, and tenderness; and bearing one with another and forgiving one another, and not laying accusations one against another; but praying one for another, and helping one another up with a tender hand.",
  "author": "Isaac Penington",
  "work": "Letters",
  "date": "1667"
}
```

The `author` key is optional.
