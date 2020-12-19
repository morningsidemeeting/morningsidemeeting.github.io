import React from "react";
import CommitteeEvents from "../../components/committee/events";

export default function CommunicationsCommitteePosts() {
  return (
    <CommitteeEvents
      calendarSlug="communications"
      title="Communications Committee"
      basePath="/communications"
    />
  );
}
