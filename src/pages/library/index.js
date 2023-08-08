import React, { Fragment, useState, useRef } from "react";
import Fuse from "fuse.js";
import CoreLayout from "../../components/coreLayout";
import Styles from "./library.module.scss";
import { graphql } from "gatsby";
import SEO from "../../components/seo";

const LibraryPage = ({ data }) => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedAuthor, setSelectedAuthor] = useState();
  const [searchTerm, setSearchTerm] = useState();
  const [searchInput, setSearchInput] = useState();
  const [searchParams, setSearchParams] = useState([true, true]);
  const categorySelect = useRef();
  const searchField = useRef();
  const searchByAuthorCheck = useRef();
  const searchByTitleCheck = useRef();

  const catMatchA = /(^\w+)\/([\w\s]+)/;
  const catMatchB = /^b\-(\w+)\/*([\w\s]*)/;

  const allBooks = data.allLibraryCatalogCsv.edges.map(({ node }) => node);
  let searchResults = null;
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

  if (searchTerm) {
    const fuseOptions = {
      isCaseSensitive: false,
      // includeScore: false,
      shouldSort: true,
      includeMatches: false,
      findAllMatches: false,
      // minMatchCharLength: 1,
      // location: 0,
      // threshold: 0.6,
      // distance: 100,
      // useExtendedSearch: false,
      // ignoreLocation: false,
      // ignoreFieldNorm: false,
      // fieldNormWeight: 1,
      keys: searchParams.reduce((acc, val, i) => {
        if (val === true) {
          acc.push(i === 0 ? "Author" : "Title");
        }
        return acc;
      }, []),
    };
    const fuse = new Fuse(allBooks, fuseOptions);
    searchResults = fuse.search(searchTerm).map(({ item }) => item);
  }

  function selectCategory(e) {
    const val =
      e.target === categorySelect.current
        ? categorySelect.current.value
        : e.currentTarget.textContent;

    setSelectedCategory(val);
  }

  function selectAuthor(e) {
    setSelectedAuthor(e.currentTarget.textContent);
  }

  function searchCatalog(e) {
    e.preventDefault();
    setSearchTerm(searchField.current.value);
  }

  function updateSearchField(e) {
    setSearchInput(e.currentTarget.value);
  }

  function deselectCategory(e) {
    setSelectedCategory("");
  }

  function deselectAuthor(e) {
    setSelectedAuthor(null);
  }

  function toggleSearchParam(e) {
    setSearchParams(
      [searchByAuthorCheck, searchByTitleCheck].map((ref) => {
        return ref.current.checked;
      })
    );
  }

  function clearSearch() {
    setSearchTerm("");
    setSearchInput("");
  }

  function renderCatalogGrid() {
    const [searchByAuthor, searchByTitle] = searchParams;
    return (
      <Fragment>
        <form onSubmit={searchCatalog}>
          <div className={Styles.searchForm}>
            <header className={Styles.searchHead}>Search</header>
            <input
              type="text"
              ref={searchField}
              value={searchInput}
              onChange={updateSearchField}
              className={StyleSheet.fieldCol2}
            />

            <input
              type="submit"
              value="Search"
              className={StyleSheet.fieldCol3}
            />
            <input
              type="reset"
              value="Clear"
              disabled={!searchTerm}
              onClick={clearSearch}
              className={StyleSheet.fieldCol4}
            />
            <div className={Styles.fieldCol2}>
              <label>
                Author{" "}
                <input
                  type="checkbox"
                  checked={searchByAuthor === true}
                  ref={searchByAuthorCheck}
                  onChange={toggleSearchParam}
                />{" "}
              </label>
              <label>
                Title{" "}
                <input
                  type="checkbox"
                  checked={searchByTitle === true}
                  ref={searchByTitleCheck}
                  onChange={toggleSearchParam}
                />{" "}
              </label>
            </div>

            <header className={Styles.filterHead}>Category</header>
            <select
              name="categories"
              onChange={selectCategory}
              ref={categorySelect}
              value={selectedCategory}
              className={Styles.fieldCol2}
            >
              <option value=""></option>
              {categories
                .filter((cat) => !!cat)
                .map((category, i) => {
                  return (
                    <option value={category} key={`catSelect${i}`}>
                      {category}
                    </option>
                  );
                })}
            </select>

            <input
              type="reset"
              value="Clear"
              disabled={!selectedCategory}
              onClick={deselectCategory}
              className="fieldCol3"
            />
          </div>
        </form>
        <ul className={Styles.filters}>
          {searchTerm ? (
            <li onClick={clearSearch}>
              <span>Searching for</span>
              <span>{searchTerm}</span>
            </li>
          ) : (
            ""
          )}
          {selectedCategory ? (
            <li onClick={deselectCategory}>
              <span>Category</span>
              <span>{selectedCategory}</span>
            </li>
          ) : (
            ""
          )}
          {selectedAuthor ? (
            <li onClick={deselectAuthor}>
              <span>Author</span>
              <span>{selectedAuthor}</span>
            </li>
          ) : (
            ""
          )}
        </ul>

        <ol className={Styles.bookList}>
          {(searchResults || allBooks).map((book, i) => {
            const { Author, Title, majorCategory, subCategory, Descriptors } =
              book;
            const isFiltered =
              (selectedCategory && selectedCategory != majorCategory) ||
              (selectedAuthor && selectedAuthor != Author);
            return !isFiltered ? (
              <li key={`book-${i}`} className={Styles.book}>
                <div className={Styles.title}>{Title}</div>
                <div className={Styles.author} onClick={selectAuthor}>
                  {Author}
                </div>
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
        <p>
          Morningside Monthly Meeting maintains a library containing books,
          pamplets, and other media of interest to Quakers. It is open to all
          before and after meeting for worship, and anyone may borrow by simply
          leaving their contact information.
        </p>
        <h3>Library Catalog</h3>
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
