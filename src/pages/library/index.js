import React, { Fragment, useState, useRef } from "react";
import Fuse from "fuse.js";
import CoreLayout from "../../components/coreLayout";
import Styles from "./library.module.scss";
// import { Link } from "gatsby";
import { graphql } from "gatsby";
import SEO from "../../components/seo";

const LibraryPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const categorySelect = useRef();

  function selectCategory(e) {
    const val =
      e.target === categorySelect.current
        ? categorySelect.current.value
        : e.currentTarget.textContent;
    setSelectedCategory(val);
  }

  function deselectCategory(e) {
    setSelectedCategory(null);
  }

  function renderCatalogGrid() {
    const allBooks = data.allLibraryCatalogCsv.edges.map(({ node }) => node);
    const fuseOptions = {
      // isCaseSensitive: false,
      // includeScore: false,
      // shouldSort: true,
      // includeMatches: false,
      // findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
      // threshold: 0.6,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      // fieldNormWeight: 1,
      keys: ["Title", "Author", "Category"],
    };
    const fuse = new Fuse(allBooks, fuseOptions);

    const catMatchA = /(^\w+)\/([\w\s]+)/;
    const catMatchB = /^b\-(\w+)\/*([\w\s]*)/;
    const booksByCategory = allBooks.reduce((acc, { Category, id }, i) => {
      let majorCategory = "";
      let subCategory = "";
      let catMatches;
      if ((catMatches = Category.match(catMatchA))) {
        majorCategory = catMatches[1];
        subCategory = catMatches[2];
      } else if ((catMatches = Category.match(catMatchB))) {
        majorCategory = `Biography (${catMatches[1]})`;
        subCategory = catMatches[2];
      } else if (Category.indexOf("P&SC") === 0) {
        majorCategory = "Peace & Social Concerns";
        subCategory = Category.substr(5);
      } else {
        majorCategory = Category;
      }
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
      allBooks[i].majorCategory = majorCategory;
      allBooks[i].subCategory = subCategory;
      return acc;
    }, {});
    const categories = Object.keys(booksByCategory).sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (b > a) {
        return -1;
      } else {
        return 0;
      }
    });
    return (
      <Fragment>
        <form>
          <select
            name="categories"
            onChange={selectCategory}
            ref={categorySelect}
          >
            {categories.map((category, i) => {
              return (
                <option
                  value={category}
                  key={`catSelect${i}`}
                  selected={category === selectedCategory}
                >
                  {category}
                </option>
              );
            })}
          </select>
        </form>
        <ul className={Styles.filters}>
          {selectedCategory ? (
            <li onClick={deselectCategory}>Category: {selectedCategory}</li>
          ) : (
            ""
          )}
        </ul>

        <ol className={Styles.bookList}>
          {allBooks.map((book, i) => {
            const { Author, Title, majorCategory, subCategory, Descriptors } =
              book;
            return !selectedCategory ||
              (selectedCategory && selectedCategory == majorCategory) ? (
              <li key={`book-${i}`} className={Styles.book}>
                <div className={Styles.title}>{Title}</div>
                <div className={Styles.author}>{Author}</div>
                <div className={Styles.category}>
                  <span onClick={selectCategory}>{majorCategory}</span>
                  {subCategory ? ` — ${subCategory}` : ""}
                </div>
                {Descriptors ? (
                  <ul className={Styles.descriptors}>
                    <li>{Descriptors}</li>
                  </ul>
                ) : (
                  ""
                )}
              </li>
            ) : null;
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
