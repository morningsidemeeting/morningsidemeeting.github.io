import React from "react";
import CoreLayout from "../components/coreLayout";
import Posts from "../components/posts";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Styles from "../components/coreLayout/coreLayout.module.scss";

const HomePage = ({ data }) => {
  const announcements = data.allMdxBlogPost.nodes;
  const currentAnnouncement = announcements[0];
  return (
    <CoreLayout withSubtitle={true}>
      <section>
        <p>
          Morningside Monthly Meeting of the Religious Society of Friends,
          formed in 1973, is a welcoming, diverse community of individuals
          living the Quaker testimonies of equality, integrity, simplicity,
          stewardship of the earth, and peace.
        </p>
        {currentAnnouncement ? (
          <p className={Styles.postPromo}>
            <a href={currentAnnouncement.slug}>
              Click here for <strong>{currentAnnouncement.title}</strong> or
              scroll to the bottom of this page
            </a>
            .
          </p>
        ) : null}
        <Img
          fluid={data.churchImg.childImageSharp.fluid}
          className={Styles.columnImage}
        />
        <p>
          Morningsiders come from a variety of faith backgrounds, and accept a
          variety of beliefs about the divine and our relationship to scripture.
          It is believed that Morningside was the first Meeting anywhere to take
          a same-sex marriage under its care and affirm the right of all couples
          to name their relationships as they choose.
        </p>
        <p>
          Members and attenders of Morningside Meeting also work together in
          committees to advance peace, racial justice, and prison reform. We
          care for and tend to each other's physical, psychological, and
          spiritual well-being.
        </p>
        <p>
          We gather for silent worship every First Day (Sunday) morning at 11
          o’clock. Traditionally, we meet at Riverside Church in Manhattan.
          Currently we hold hybrid meetings, with most members attending via
          Zoom and a small number gathering together and connecting from
          Riverside. <strong>All are welcome.</strong>
        </p>
        <hr />
        <Posts nodes={announcements} />
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
        date
        slug
      }
    }
    churchImg: file(relativePath: { eq: "ny_riverside_church.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;

export default HomePage;
