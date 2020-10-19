import React from "react";
import CoreLayout from "../components/coreLayout";
import Posts from "../components/posts";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

const HomePage = ({ data }) => {
  const { title = "untitled", body = "" } = data.allMdxBlogPost.nodes[0];
  return (
    <CoreLayout withSubtitle={true}>
      <section>
        <p>
          Morningside Monthly Meeting of the Religious Society of Friends,
          formed in 1973, is a welcoming, diverse community of individuals
          dedicated to the Quaker testimonies of equality, integrity,
          simplicity, stewardship of the earth, and peace.
        </p>
        <p>
          Morningsiders come from a variety of faith backgrounds, and accept a
          variety of beliefs about the divine and our relationship to scripture.
          It is believed that Morningside was the first Meeting anywhere to take
          a same-sex marriage under its care and affirm the right of all couples
          to name their relationships as they choose.
        </p>
        <p>
          We gather for silent worship every First Day (Sunday) morning at 11
          o’clock. Traditionally, we meet at Riverside Church in Manhattan.
          Since March 15, 2020, meetings for worship have been held on Zoom.
        </p>
        <p>
          Members and attenders of Morningside Meeting also work together in
          committees to advance peace, racial justice, and prison reform. We
          care for and tend to each other's physical, psychological, and
          spiritual well-being.
        </p>
        <p>
          <strong>All are welcome.</strong> If you are not already on our
          mailing list, please contact us at{" "}
          <a href="mailto:morningsidequakermeeting@gmail.com">
            morningsidequakermeeting@gmail.com
          </a>{" "}
          for information about how to join via Zoom.
        </p>
        <Posts nodes={data.allMdxBlogPost.nodes} />
      </section>
    </CoreLayout>
  );
};

export const query = graphql`
  {
    allMdxBlogPost(
      limit: 1
      sort: { fields: date, order: DESC }
      filter: { tags: { in: "announcements" } }
    ) {
      nodes {
        body
        title
        id
      }
    }
  }
`;

export default HomePage;
