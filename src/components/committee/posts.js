import React from "react";
import { StaticQuery, graphql } from "gatsby";
import CommitteePage from "./index";
import Posts from "../posts";

function CommitteePosts({ data, tag }) {
  const nodes = data.allMdxBlogPost.nodes.filter((n) => n.tags.includes(tag));

  if (nodes.length) {
    return <Posts nodes={nodes} title="Posts" />;
  } else {
    return <p>No posts found.</p>;
  }
}

export default function CommitteePostsPage({ title, basePath, tag }) {
  return (
    <StaticQuery
      query={graphql`
        {
          allMdxBlogPost(
            limit: 100
            sort: { fields: date, order: DESC }
            filter: { tags: { in: "committees", nin: "archived" } }
          ) {
            nodes {
              body
              title
              id
              date
              slug
              tags
            }
          }
        }
      `}
      render={(data) => (
        <CommitteePage title={title} basePath={basePath}>
          <CommitteePosts data={data} tag={tag} />
        </CommitteePage>
      )}
    />
  );
}
