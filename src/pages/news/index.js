import React from "react";
import { graphql } from "gatsby";
import CoreLayout from "../../components/coreLayout";
import Posts from "../../components/posts";

const NewsPage = ({ data }) => {
  return (
    <CoreLayout withSubtitle={false}>
      <section>
        <h2>News</h2>
        <p>
          As Friends, we are called to live out the values that we proclaim
          within. Our work for social justice arises out of our belief that
          there is the Divine in all. Quakers believe that equality is a given,
          for we we are all created in the image of God, and equality of access
          to the Spirit must be accompanied by equality of access to the social,
          economic, or political aspects of the world, so that the world without
          must be in harmony with the world within.
        </p>

        <p>
          Social action is not an activity that is grafted onto a spiritual
          life; it is the very fruit of a spiritual life. The more that we come
          into the presence of the Spirit within, the more will we also come
          into contact with the world without.
        </p>

        <p>
          For Friends at Morningside, social action is associated with the Peace
          &amp; Social Concerns Committee. This committee acts as a Committee of
          the Whole, which means that all are invited to attend meetings and
          participate in decisions.
        </p>
      </section>
      <section>
        <Posts nodes={data.allMdxBlogPost.nodes} title="Announcements" />
      </section>
    </CoreLayout>
  );
};

export const query = graphql`
  {
    allMdxBlogPost(
      limit: 10
      sort: { fields: date, order: ASC }
      filter: { tags: { in: ["psc", "blog"], nin: "archived" } }
    ) {
      nodes {
        body
        title
        id
        date
      }
    }
  }
`;

export default NewsPage;
