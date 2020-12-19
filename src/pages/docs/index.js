import React, { useState, useEffect, Fragment } from "react";
import CoreLayout from "../../components/coreLayout";
import SubNav from "../../components/subNav/docs";
import Files, { FOLDER_IDS } from "../../components/files";

const allFolderIds = Object.values(FOLDER_IDS);

const DocsPage = () => {
  return (
    <CoreLayout withSubtitle={false}>
      <SubNav />
      <Files folderIds={allFolderIds} orderBy="name desc" />
    </CoreLayout>
  );
};
export default DocsPage;
