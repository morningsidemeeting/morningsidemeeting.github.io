import React, { Fragment } from "react";
import CoreLayout from "../../components/coreLayout";
import Styles from "./library.module.scss";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import SEO from "../../components/seo";

const committeeLinks = {
  "Peace and Social Concerns": "/peace-and-social-concerns",
  "Communications and Website": "/communications",
  Finance: "/finance",
  Nominating: "/nominating",
  "Ministry and Counsel": "/ministry-and-counsel",
  Library: "/library-committee",
  "Friends’ Committee on Unity with Nature (Friends Earthcare Witness)":
    "/nature-committee",
  "Caregivers for Meeting with Children": "/first-day-caregivers",
  Hospitality: "/hospitality-committee",
  "ARCH representative": "/arch",
  "Riverside Space": "/riverside-space-committee",
  "Prison Ministry": "/prison-committee",
};

const LibraryPage = ({ data }) => {
  function renderCatalogGrid() {
    const allBooks = data.allLibraryCatalogCsv.edges.map(({ node }) => node);
    console.log(allBooks);
    return (
      <Fragment>
        <table>
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Shelving Category</th>
              <th>Descriptors</th>
            </tr>
          </thead>
          <tbody>
            {allBooks.map((book, i) => {
              const { Author, Title, Category, Descriptors } = book;
              return (
                <tr key={`book-${i}`}>
                  <td>{Author}</td>
                  <td>{Title}</td>
                  <td>{Category}</td>
                  <td>{Descriptors}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
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
          <thead>
            <tr>
              <th colSpan={2} className={Styles.ncp}>
                Non-Committee Positions
              </th>
            </tr>
          </thead>
          <tbody>
            {nonCommitteePositions.map(([Position, Member], i) => {
              return (
                <tr key={`ncps-${i}`}>
                  <td className={Styles.cmte}>{Position}</td>
                  <td>{Member}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th className={Styles.cmte}>Committee</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {alphaCommittees.reduce((acc, name, i) => {
              membersByCommittee[name].forEach((member, j) => {
                let row;
                const key = `cms-${i}-${j}`;
                if (j == 0) {
                  row = (
                    <tr key={key} className={Styles.cmte}>
                      <td
                        className={Styles.cmte}
                        rowSpan={membersByCommittee[name].length}
                      >
                        {committeeLinks[name] ? (
                          <Link to={committeeLinks[name]}>{name}</Link>
                        ) : (
                          <span>{name}</span>
                        )}
                      </td>
                      <td>{member}</td>
                    </tr>
                  );
                } else {
                  row = (
                    <tr key={key}>
                      <td>{member}</td>
                    </tr>
                  );
                }
                acc.push(row);
              });

              return acc;
            }, [])}
          </tbody>
        </table>
      </Fragment>
    );
  }

  return (
    <CoreLayout withSubtitle={false}>
      <SEO title="Library" />
      <section>
        <p>This is the Library page.</p>
        {renderCatalogGrid()}
      </section>
    </CoreLayout>
  );
};

export const query = graphql`
  query Catalog {
    allLibraryCatalogCsv {
      edges {
        node {
          id
          Author
          Title
          Category
          Descriptors
        }
      }
    }
  }
`;

export default LibraryPage;
