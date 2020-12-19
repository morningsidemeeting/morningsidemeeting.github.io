import React from "react";
import CoreLayout from "../coreLayout";
import SubNav from "../subNav";

export default function CommitteePage({ title, basePath, children }) {
  // function renderFiles() {
  //   if (filesSlug) {
  //     return (
  //       <section>
  //         <h2>Documents</h2>
  //         <Files folderIds={[filesSlug]} orderBy="name desc" />
  //       </section>
  //     );
  //   } else {
  //     return null;
  //   }
  // }
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
