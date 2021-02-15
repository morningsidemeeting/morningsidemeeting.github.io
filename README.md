# Website of the Morningside Monthly Meeting of the Religious Society of Friends

## Developer's Guide

The Morningside Website was built by [Scott Blumenthal](https://github.com/blumysden) using a basic install of [Gatsby.js](https://www.gatsbyjs.com/) with the `gatsby-starter-blog-theme`. It also uses the following Gatsby plugins:

- `gatsby-image` ([documentation](https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-image/))
- `gatsby-background-image` ([documentation](https://www.gatsbyjs.com/plugins/gatsby-background-image/))
- `gatsby-source-filesystem` ([documentation](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/))
- `gatsby-transformer-csv` ([documentation](https://www.gatsbyjs.com/plugins/gatsby-transformer-csv/))

It is deployed to GitHub Pages via the [Gatsby Publsh workflow](https://github.com/marketplace/actions/gatsby-publish).

It was developed using Node 12.17.0. (The repo includes an `.nvmrc` file.)

### Managing the Domain Name

TK: The website will rely on the Gatsby Publish workflow to set the correct CNAME, as [specified in the documentation](https://github.com/marketplace/actions/gatsby-publish#cname).

### Adding a Committee Section

TK TK TK.

### Google Calendar Integration

### Google Docs Integration

## Contributor's Guide

### Editing Site Content through GitHub

We will maintain much of the content on our website using Google's suite of tools: Calendar and Docs in particular. (Information for developers on how to work with these integrations can be [found above](#google-calendar-integration)).)

Some of the site content, however, is in the source code for the website itself. Fortunately GitHub, where the code is hosted, provides a web interface for editing code directly in one's browser. We will provide interested members of the Morningside community GitHub access to the repository, allowing them to create new posts, update content, and more on their own.

### Site Pages

Most of the site's pages have some content hard-coded into them. This text should be easily editable by anyone with access to the source code (via GitHub) and a basic understanding of HTML.

The pages are all nested in their own directories under `/src/pages/`. The name of the directory corresponds to the URL of that page on the site, and the content will be in the index file for that directory: `index.js`. So, for example, to edit the text of the page "A Brief History of the Quakers" in the "About" section of the site:

1. Figure out the name of the directory by looking at the URL of the page in your browser. The URL for this page is `https://morningsidemeeting.org/quakers`, so the directory will be called `quakers`.
1. Edit the text in the index file for that directory: `/src/pages/quakers/index.js`.
1. Save (commit) your changes to the `main` branch of the repository.

### Updating Homepage Content

The text at the top of the homepage is hard-coded into the

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
