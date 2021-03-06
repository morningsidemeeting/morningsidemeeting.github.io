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

### Adding Sub-navigation

The sub-navigation bars for pages are all in the `/src/components/nav` folder. Each renders the base component defined in `index.js`, passing in an array of `links`. Each link is an array of two string: the link text and the path for the page. For example, the About subnav links are:

```
const links = [
  ["Morningside", "/about"],
  ["Quakers", "/quakers"],
  ["Worship", "/worship"],
  ["Business", "/business"],
  ["Fellowship", "/fellowship"],
];
```

To create a new sub-navigation component, just copy one of the existing files, replace the links, and import it into the page where you'd like it to show. An example from the top of the About page:

```
import Nav from "../../components/nav/about";

const AboutPage = () => (
  <CoreLayout withSubtitle={false}>
    <Nav />
  …
```

### Adding a Shared Calendar

Shared calendars are owned by the `morningsidemeetingtest@gmail.com` Google account, currently maintained by Scott Blumenthal. If you'd like to have a new calendar created, please contact Scott. Once created, it administrative permissions can be shared with anyone who needs them.

Shared calendars are accessed via a Google API. Within the codebase, they are usually referred to by a "slug" set in `CALENDAR_IDS` in `/src/shared/googleConfig.js`. After creating a new calendar, add a slug for it to the list of calendar IDs in that file.

### Adding a New Set of Documents

The website's Google Drive is owned by the `morningsidemeetingtest@gmail.com` Google account, currently maintained by Scott Blumenthal. If you'd like to add a new set of document, please contact Scott.

Each document set lives in its own folder at the top level of the Drive. To create a new folder for "Memorial Minutes," for example, add the folder then change its sharing options so "Anyone with the link can view":

![change setting from this](https://user-images.githubusercontent.com/326477/110209339-fc98e600-7e59-11eb-8994-7503602e0495.png)

![to this](https://user-images.githubusercontent.com/326477/110209341-002c6d00-7e5a-11eb-8815-f54b50f2d4ca.png)

Grant individual access (at the "editor" level) to anyone who should be able to add or remove files from the folder:

![add editor access to individuals](https://user-images.githubusercontent.com/326477/110209346-0589b780-7e5a-11eb-8c13-4d5b62f4e091.png)

The Files component, which lists files on the Morningside site's pages, refers to folders by a `slug`. Add new slugs (and their associated folder ID) to `/src/shared/folderIds.json`:

```
{
  …
  "memorial_minutes": "1fIB8s7CI63ciUCCBDTgF5LlkbOkq7DUO"
  …
}
```

You can get the folder ID from the URL in Google Drive:

![folder ID is in the URL](https://user-images.githubusercontent.com/326477/110209348-09b5d500-7e5a-11eb-82d5-b943b5163e00.png)

Add this ID (with a slug) to the list of `FOLDER_IDS` in `/src/shared/googleConfig.js` so it can easily be accessed from pages.

### Adding a Committee Section

Each committee section consists of four pages: a hompage (`index.js`), events (`events.js`), posts (`posts.js`), and docs (`documents.js`).

To create a new committee section:

1. Copy `src/pages/example-committee-section` to a new directory under `src/pages` with a unique name. The name will become the path for the section. So for example, if you were adding a Technology Committee section, you might copy the directory to `src/pages/technology`, which would become available at `https://morningsidemeeting.org/technology`.
1. Update the `config.json` file. Fill in the relevant information as below:

```
{
  "title": "Title of the Committee",
  "basePath": "/communications",
  "calendarSlug": "communications",
  "postsTag": "communications",
  "filesSlug": "communications"
}
```

`title` is displayed at the top of the committee section pages. `basePath` should correspond to the name of the directory created in Step 1. `calendarSlug` corresponds to the "slug" of the for the calendar in `/src/shared/calendarIds.json`. (See ["Adding A Shared Calendar"](#adding-a-shared-calendar) above)

### Google API Access

Access to Google Calendars and Drive is managed by the GAPI component at `/src/components/gapi/index.js`. This component uses React Helmet to inject the Google API script include at the top of a page:

```
<Helmet>
  <script async defer src="https://apis.google.com/js/api.js"></script>
</Helmet>
```

The Google API key and client id are imported from `/src/shared/googleConfig.js`.

It also exports an async function, `loadAndInitGapi` that loads and initializes the Google API client, and returns the client so it can be used to make calls. For example, the Files component (at `/src/components/files/index.js`) calls uses `loadAndInitGapi` to load a list of files like this:

```
loadAndInitGapi().then((client) => {
        client.drive.files
          .list({
          …
```

### Google Calendar Integration

### Google Docs Integration

Documents submitted via the Google Form will be added to this [Google Drive folder](https://drive.google.com/drive/folders/0B6T3EA0swtJFfmwxZTRNU3FwVm5CWVZyNG1MZGZrbkg2QmVpdjlZUlRQdnhmNGxYOEU5R00)

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

### Adding a Post

The easiest way to add a post to the site is to fill out the Google Form [Share News With Morningside Meeting](https://morningsidemeeting.org/news/share/). Your submission will go to a site administrator who can add the post manually.

Administrators can review submitted posts in [this Google Sheet](https://docs.google.com/spreadsheets/d/1NE96Ao7SvoAfuwyCFu1ZTiWMGhb1DsaRg3H8iF1nI4o/edit#gid=1084204557).

Anyone with repository access can also add posts for any section of the site. Simply add an `.mdx` file (a [React-friendly variation](https://mdxjs.com/) of [Markdown](https://www.markdownguide.org/)) file to the `content/posts/` directory with the following format:

```
---
title: Updates on the Ribbon 2020 March
date: 2020-08-18
tags: [psc, committees]
---

Your post's content here.  Irure tempor magna dolore ad cupidatat est labore deserunt exercitation anim ipsum eu quis. Adipisicing sint laborum est id pariatur est ipsum. Qui ex fugiat ex anim.

Quis reprehenderit veniam ut sint. Cillum est incididunt adipisicing voluptate eiusmod irure Lorem amet mollit excepteur. Ea aute cillum deserunt officia sint sit sunt. Dolor non exercitation laborum amet anim laboris aliqua amet eiusmod
```

Tags determine where on the site the post will show up: in the main news section, on committee pages, etc. If you want a post not to display any more, just add the `archived` tag to the list.

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
