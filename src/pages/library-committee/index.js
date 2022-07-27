import React from "react";
import Committee from "../../components/committee";
import { basePath, title } from "./config.json";
import { Link } from "gatsby";

export default function CommitteePage() {
  return (
    <Committee title={title} basePath={basePath}>
      <p>The Library Committee</p>
      <ul>
        <li>Maintains library and coordinates lending of books</li>
        <li>
          Coordinates the selection and purchase of books with New York Yearly
          Meeting’s annual $50 contribution from the Mosher Fund
        </li>
      </ul>
    </Committee>
  );
}
