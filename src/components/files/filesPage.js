import React from "react";
import CoreLayout from "../coreLayout";
import SubNav from "../subNav/docs";
import Files from "../files";

const FilesPage = ({ folderSlug, children }) => {
  return (
    <CoreLayout withSubtitle={false}>
      <SubNav />
      {children}
      <Files folderIds={[folderSlug]} orderBy="name desc" />
    </CoreLayout>
  );
};
export default FilesPage;
