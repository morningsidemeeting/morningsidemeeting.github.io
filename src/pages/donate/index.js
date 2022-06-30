import React from "react";
import { graphql } from "gatsby";
import CoreLayout from "../../components/coreLayout";
import SEO from "../../components/seo";
import Img from "gatsby-image";

const DonatePage = ({ data }) => (
  <CoreLayout withSubtitle={false}>
    <SEO title="Donate to Morningside Meeting" />
    <section>
      <h2>Support Morningside Meeting</h2>
      <p>
        Morningside gratefully accepts donations to support its work,
        activities, and worship.
      </p>
      <p>
        You can make a one-time or recurring donation online by either clicking
        on the Donate button or scanning the QR code below.
      </p>
      <p>If you prefer to donate with a check, please send it to:</p>
      <p>
        Morningside Meeting
        <br />℅ NY Quarterly Meeting
        <br />
        15 Rutherford Place
        <br />
        New York, NY 10003
      </p>
    </section>
    <section>
      <h3>Donate Online</h3>
      <p>
        <em>
          Please note that clicking on the Donate button will redirect you to
          our form on PayPal; a PayPal account is <strong>not</strong> required
          to donate, however.
        </em>
      </p>
      <div className="donate-container">
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
        >
          <input type="hidden" name="hosted_button_id" value="JBTCB4CK6XT7Y" />
          <input
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
            style={{ marginBottom: "20px" }}
          />
          <Img fluid={data.QRCode.childImageSharp.fluid} />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_US/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    </section>
  </CoreLayout>
);

export const query = graphql`
  {
    QRCode: file(relativePath: { eq: "paypal-qr-code.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 150, quality: 100) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;

export default DonatePage;
