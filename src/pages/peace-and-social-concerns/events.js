import React from "react";
import CommitteeEvents from "../../components/committee/events";
import { basePath, title } from "./index";

export default function CommitteeEventsPage() {
  return (
    <CommitteeEvents calendarSlug="psc" title={title} basePath={basePath} />
  );
}
