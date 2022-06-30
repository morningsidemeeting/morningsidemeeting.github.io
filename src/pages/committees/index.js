import React, { Fragment } from "react";
import CoreLayout from "../../components/coreLayout";
import Styles from "./committees.module.scss";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import SEO from "../../components/seo";

const committeeLinks = {
  "Peace and Social Concerns Committee": "/peace-and-social-concerns",
  "Communications and Website Committee": "/communications",
  "Finance Committee": "/finance",
  "Nominating Committee": "/nominating",
  "Ministry and Counsel": "/ministry-and-counsel",
  "Library Committee": "/library-committee",
  "Friends’ Committee on Unity with Nature (Friends Earthcare Witness)":
    "/nature-committee",
  "First Day Caregivers": "/first-day-caregivers",
  "Hospitality Committee": "/hospitality-committee",
  "ARCH representative": "/arch",
  "Riverside Space Committee": "/riverside-space-committee",
  "Committee for Prison Ministry": "/prison-committee",
};

const CommitteesPage = ({ data }) => {
  function renderCommitteeMembersGrid() {
    const allMembers = data.allCommitteeMembersCsv.edges.map(
      ({ node }) => node
    );
    const nonCommitteePositions = [];
    const membersByCommittee = {};
    allMembers.forEach(({ Committee, Position, Member }) => {
      if (Committee) {
        if (!membersByCommittee[Committee]) {
          membersByCommittee[Committee] = [];
        }
        membersByCommittee[Committee].push(
          Position ? `${Member} (${Position})` : Member
        );
      } else {
        nonCommitteePositions.push([Position, Member]);
      }
    });
    const alphaCommittees = Object.keys(membersByCommittee).sort(
      (aName, bName) => {
        if (aName > bName) {
          return 1;
        } else if (aName < bName) {
          return -1;
        } else {
          return 0;
        }
      }
    );
    return (
      <Fragment>
        <table>
          <thead></thead>
          <tbody>
            {nonCommitteePositions.map(([Position, Member], i) => {
              return (
                <tr key={`ncps-${i}`}>
                  <td>{Position}</td>
                  <td>{Member}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Committee</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {alphaCommittees.map((name, i) => {
              const members = membersByCommittee[name];

              return (
                <tr key={`cms-${i}`}>
                  <td>{name}</td>
                  <td>{members.join("<br/>")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }

  function renderCommitteePagesList() {
    const alphaCommittees = Object.keys(committeeLinks).sort((aName, bName) => {
      if (aName > bName) {
        return 1;
      } else if (aName < bName) {
        return -1;
      } else {
        return 0;
      }
    });
    return (
      <ul className={Styles.committeePages}>
        {alphaCommittees.map((name, i) => {
          return (
            <li key={`committee-${i}`}>
              <Link to={committeeLinks[name]}>{name}</Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <CoreLayout withSubtitle={false}>
      <SEO title="Committees" />
      <section>
        <p>
          As Friends do not have a traditional minister and staff, Meeting acts
          through its committees. From a Business Meeting of the whole to a
          Relief Committee with three members, activities in Quakerism are
          accomplished through Committees.
        </p>

        <h3>Committee Pages</h3>
        {renderCommitteePagesList()}

        <h3>All Positions &amp; committee members for 2022</h3>

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

        <p>
          <em>
            The full list of committee members, as approved at the called
            meeting for worship with a concern for business on January 9, 2022,
            will be posted here soon.
          </em>
        </p>
        {renderCommitteeMembersGrid()}
      </section>
    </CoreLayout>
  );
};

export const query = graphql`
  query MyQuery {
    allCommitteeMembersCsv {
      edges {
        node {
          id
          Committee
          Position
          Member
        }
      }
    }
  }
`;

export default CommitteesPage;
