import React, { useState, useEffect, Fragment } from "react";
import FilesPage from "../../components/files/filesPage";

export default function SOTMPage() {
  return (
    <FilesPage folderSlug="sotm">
      <section>
        <p>
          Every year Ministry and Council organizes a time for the Meeting to
          reflect upon and discern the life of the Meeting over the past year.
          The result of these reflections is organized in the “State of the
          Meeting Report.”
        </p>
      </section>
    </FilesPage>
  );
}
