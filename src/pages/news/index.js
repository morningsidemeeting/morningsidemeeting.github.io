import React from "react";
import { graphql } from "gatsby";
import CoreLayout from "../../components/coreLayout";
import Posts from "../../components/posts";

const NewsPage = ({ data }) => {
  return (
    <CoreLayout withSubtitle={false}>
      <section>
        <Posts nodes={data.allMdxBlogPost.nodes} withTags={true} />
      </section>
    </CoreLayout>
  );
};

export const query = graphql`
  {
    allMdxBlogPost(
      limit: 10
      sort: { fields: date, order: DESC }
      filter: { tags: { in: ["psc", "blog"], nin: "archived" } }
    ) {
      nodes {
        body
        title
        id
        date
        tags
        slug
      }
    }
  }
`;

export default NewsPage;
