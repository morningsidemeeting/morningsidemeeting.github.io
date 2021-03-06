import React from "react";
import CoreLayout from "../coreLayout";
import Nav from "../nav/docs";
import Files from "../files";

const FilesPage = ({ folderSlug, formatFileName, children }) => {
  return (
    <CoreLayout withSubtitle={false}>
      <Nav />
      {children}
      <Files
        folderIds={[folderSlug]}
        orderBy="name desc"
        formatFileName={formatFileName}
      />
    </CoreLayout>
  );
};
export default FilesPage;
