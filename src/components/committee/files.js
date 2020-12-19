import React from "react";
import CommitteePage from "./index";
import Files from "../files";

export default function CommitteeFilesPage({ title, basePath, filesSlug }) {
  function renderFiles() {
    if (filesSlug) {
      return (
        <section>
          <Files folderIds={[filesSlug]} orderBy="name desc" />
        </section>
      );
    } else {
      return null;
    }
  }

  return (
    <CommitteePage title={title} basePath={basePath}>
      {renderFiles()}
    </CommitteePage>
  );
}
