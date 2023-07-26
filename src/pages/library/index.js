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
    const booksByCategory = allBooks.reduce((acc, { Category, id }, i) => {
      const majorCategoryMatch = Category.match(/(^\w+)\/([\w\s]+)/);
      if (majorCategoryMatch) {
        console.log(majorCategoryMatch);
      }
      const majorCategory =
        Category.indexOf("b-") == 0 ? "Biography" : Category;
      const subCategory = "";
      if (!acc[majorCategory]) {
        acc[majorCategory] = {
          books: [id],
          subCategories: {
            [subCategory]: { books: [id] },
          },
        };
      } else {
        acc[majorCategory].books.push(id);
      }
      return acc;
    }, {});
    const categories = Object.keys(booksByCategory);
    // console.log(booksByCategory);
    return (
      <Fragment>
        <ol>
          {allBooks.map((book, i) => {
            const { Author, Title, Category, Descriptors } = book;
            return (
              <li key={`book-${i}`}>
                <header>{Title}</header>
                <div className={Styles.author}>{Author}</div>
                <div className={Styles.category}>{Category}</div>
                <ul>
                  <li>{Descriptors}</li>
                </ul>
              </li>
            );
          })}
        </ol>
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
