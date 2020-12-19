import React from "react";
import CommitteePosts from "../../components/committee/posts";
import { basePath, title } from "./index";

export default function CommitteePostsPage() {
  return <CommitteePosts tag="psc" title={title} basePath={basePath} />;
}
