import React from "react";
import CoreLayout from "../coreLayout";
import Nav from "../nav/docs";
import Files from "../files";
import CallToAction from "../callToAction";

const FilesPage = ({ folderSlug, formatFileName, children }) => {
  return (
    <CoreLayout withSubtitle={false}>
      <Nav />
      <section>
        <CallToAction path="https://forms.gle/N5ifGKS6FoTYsZEK7">
          Want to add a document to the website? Please fill out out our form.
        </CallToAction>
      </section>
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
