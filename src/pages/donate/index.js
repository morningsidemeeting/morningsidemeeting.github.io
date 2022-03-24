import React from "react";
import CoreLayout from "../../components/coreLayout";
// import Nav from "../../components/nav/about";
import SEO from "../../components/seo";
import Donate from "../../components/donate";

const DonatePage = () => (
  <CoreLayout withSubtitle={false}>
    <SEO title="Donate to Morningside Meeting" />
    <section>
      <h2>Support Morningside Meeting</h2>
      <p>Lorem ipsum.</p>
      <Donate />
    </section>
  </CoreLayout>
);
export default DonatePage;
