import React from "react";
import CoreLayout from "../coreLayout";
import SubNav from "../subNav/docs";
import Files, { FOLDER_IDS } from "../files";

const FilesPage = ({ folderSlug }) => {
  return (
    <CoreLayout withSubtitle={false}>
      <SubNav />
      <Files folderIds={[FOLDER_IDS[folderSlug]]} orderBy="name desc" />
    </CoreLayout>
  );
};
export default FilesPage;
