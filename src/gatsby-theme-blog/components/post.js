import React from "react";
import CoreLayout from "../../components/coreLayout";
import { Post } from "../../components/posts";

const BlogPost = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => {
  return (
    <CoreLayout withSubtitle={false}>
      <section>
        <Post linkTitle={false} {...post} />
      </section>
    </CoreLayout>
  );
};

export default BlogPost;
