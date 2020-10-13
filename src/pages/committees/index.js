import React from "react";
import CoreLayout from "../../components/coreLayout";
import SubNav from "../../components/subNav/business";

import { graphql } from "gatsby";

// import parse  from "csv-parse/lib/sync"
// import { readFileSync } from "fs"

// let registrations = fs.readFileSync('./registrations.csv')
// let records = parse(registrations, {columns: true});

const AboutPage = ({ data }) => {
  function renderCommitteesAndNominees() {
    const committees = data.allCommitteesCsv.edges;
    return (
      <ul>
        {committees.map(({ node: committee }, i) => {
          return (
            <li key={`committee-${i}`}>
              <strong>{committee.Position}:</strong> {committee.Nominees}
            </li>
          );
        })}
      </ul>
    );
  }
  return (
    <CoreLayout withSubtitle={false}>
      <SubNav />
      <section>
        <h2>Committees</h2>
        <p>
          As Friends do not have a traditional minister and staff, Meeting acts
          through its committees. From a Business Meeting of the whole to a
          Relief Committee with three members, activities in Quakerism are
          accomplished through Committees.
        </p>

        <p>
          Committees have either a clerk for a long standing committee such as
          Ministry and Counsel or a convener for a short-term committee such as
          a Clearness Committee. Like all Quaker activities, committees begin
          and end in silent worship and members await the leading of the Spirit
          in the transaction of business. Committees are therefore forms of
          worship that are Spirit-led.
        </p>

        <p>
          In order to ensure a democratic distribution of authority, the clerk
          and other members of committees serve only for a specified length of
          time. All Meeting members and attenders may be asked to sit on
          committees, depending upon their leadings and the discernment of their
          gifts by the Nominating Committee.
        </p>

        <p>
          Anyone with a leading for service to the community should contact the
          clerk of nominating or any member of the nominating committee to make
          that leading known.
        </p>

        <h3>Positions &amp; committee members for 2020</h3>

        <p>
          All positions are for one year, renewable except for the nominating
          committee terms which are for two years, staggered terms, renewable
          once, and ministry &amp; counsel terms for 3 years, renewable once,
          staggered terms.
        </p>

        {renderCommitteesAndNominees()}
      </section>
    </CoreLayout>
  );
};

export const query = graphql`
  query {
    allCommitteesCsv {
      edges {
        node {
          Position
          Nominees
        }
      }
    }
  }
`;

export default AboutPage;
