import React from "react";
import CoreLayout from "../coreLayout";
import SubNav from "../subNav";

export default function CommitteePage({ title, basePath, children }) {
  const links = [
    ["About", basePath],
    ["Posts", `${basePath}/posts`],
    ["Events", `${basePath}/events`],
    ["Documents", `${basePath}/documents`],
  ];

  return (
    <CoreLayout withSubtitle={false}>
      <section>
        <h2>{title}</h2>
        <SubNav links={links} />
        {children}
      </section>
    </CoreLayout>
  );
}
