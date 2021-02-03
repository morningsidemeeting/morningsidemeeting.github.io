import React from "react";
import CommitteeFiles from "../../components/committee/files";
import { basePath, title } from "./index";

export default function CommitteeFilesPage() {
  return (
    <CommitteeFiles
      filesSlug="communications"
      title={title}
      basePath={basePath}
    />
  );
}