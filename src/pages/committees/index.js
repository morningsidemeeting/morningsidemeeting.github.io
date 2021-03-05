import React from "react";
import CoreLayout from "../../components/coreLayout";
import Styles from "./committees.module.scss";
import { Link } from "gatsby";
import { graphql } from "gatsby";

const committeeLinks = {
  "Peace and Social Concerns Committee": "/peace-and-social-concerns",
  "Communications and Website Committee": "/communications",
};

const CommitteesPage = ({ data }) => {
  const committees = data.allCommittees2021Csv.edges;

  function renderCommitteePagesList() {
    return (
      <ul className={Styles.committeePages}>
        {committees.reduce((acc, { node: committee }, i) => {
          const { Position: name } = committee;
          const committeePage = committeeLinks[name];
          if (committeePage) {
            acc.push(
              <li key={`committee-${i}`}>
                <Link to={committeePage}>
                  {name.replace(/committee/i, "").trim()}
                </Link>
              </li>
            );
          }
          return acc;
        }, [])}
      </ul>
    );
  }

  function renderCommitteesAndNominees() {
    return (
      <ul className={Styles.committeeList}>
        {committees.map(({ node: committee }, i) => {
          const {
            Position: name,
            Nominees: members,
            Responsibilities: responsibilities,
          } = committee;
          const committeePage = committeeLinks[name];
          const committeeEl = committeePage ? (
            <Link to={committeePage}>{name}</Link>
          ) : (
            <strong>{name}</strong>
          );
          return (
            <li key={`committee-${i}`}>
              {committeeEl}
              <p className={Styles.nominees}>{members}</p>
              {responsibilities.split("\n\n").map((text) => (
                <p>{text}</p>
              ))}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <CoreLayout withSubtitle={false}>
      <section>
        <p>
          As Friends do not have a traditional minister and staff, Meeting acts
          through its committees. From a Business Meeting of the whole to a
          Relief Committee with three members, activities in Quakerism are
          accomplished through Committees.
        </p>

        <h3>Committee Pages</h3>
        {renderCommitteePagesList()}

        <h3>All Positions &amp; committee members for 2021</h3>

        <p>
          Committees have either a clerk for a long standing committee such as
          Ministry and Counsel or a convener for a short-term committee such as
          a Clearness Committee. Like all Quaker activities, committees begin
          and end in silent worship and members await the leading of the Spirit
          in the transaction of business. Committees are therefore forms of
          worship that are Spirit-led.
        </p>

        <p>
          In order to ensure shared decision-making, the clerk and other members
          of committees serve only for a specified length of time. All Meeting
          members and attenders may be asked to sit on committees, depending
          upon their leadings and the discernment of their gifts by the
          Nominating Committee.
        </p>

        <p>
          Anyone with a leading for service to the community should contact the
          clerk of nominating or any member of the nominating committee to make
          that leading known.
        </p>

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
    allCommittees2021Csv {
      edges {
        node {
          Position
          Nominees
          Responsibilities
        }
      }
    }
  }
`;

export default CommitteesPage;
