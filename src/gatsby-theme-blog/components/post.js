import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import CoreLayout from "../../components/coreLayout";

// import Layout from "./layout";
// import SEO from "./seo";
// import PostTitle from "./post-title";
// import PostDate from "./post-date";
// import PostFooter from "./post-footer";
// import PostHero from "./post-hero";

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <CoreLayout withSubtitle={false}>
    <section>
      <MDXRenderer>{post.body}</MDXRenderer>
    </section>
  </CoreLayout>
);

export default Post;
