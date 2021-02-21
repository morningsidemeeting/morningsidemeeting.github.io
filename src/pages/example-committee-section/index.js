import React from "react";
import Committee from "../../components/committee";
import { basePath, title } from "./config.json";

export default function CommitteePage() {
  return (
    <Committee title={title} basePath={basePath}>
      <p>Committee description goes here.</p>
    </Committee>
  );
}
