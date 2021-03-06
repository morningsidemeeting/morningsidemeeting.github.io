import React from "react";
import { graphql } from "gatsby";
import CoreLayout from "../../components/coreLayout";
import Posts from "../../components/posts";
import CallToAction from "../../components/callToAction";

const NewsPage = ({ data }) => {
  return (
    <CoreLayout withSubtitle={false}>
      <section>
        <CallToAction path="/news/share">
          Want to share news on the website? Please fill out our form.
        </CallToAction>
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
      # LIST ALL TAGS FOR POSTS TO INCLUDE IN THIS LIST
      filter: {
        tags: {
          # in: ["psc", "blog", "prisons"]
          nin: ["archived", "announcements"]
        }
      }
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
