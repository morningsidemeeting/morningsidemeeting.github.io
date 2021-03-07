import React from "react";
import Committee from "../../components/committee";
import { basePath, title } from "./config.json";
import { Link } from "gatsby";

export default function CommitteePage() {
  return (
    <Committee title={title} basePath={basePath}>
      <p>
        Committee description coming soon. Please see the main{" "}
        <Link to="/committees">Committees page</Link> for more details.
      </p>
      <p>
        Ministry and Council also helps form spiritual nurture groups. A
        selection of documents related to spiritual nurture groups can be found{" "}
        <Link to={`${basePath}/spiritual-nurture-groups`}>here</Link>.
      </p>
    </Committee>
  );
}
