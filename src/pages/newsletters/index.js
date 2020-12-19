import React, { useState, useEffect, Fragment } from "react";
import FilesPage from "../../components/files/filesPage";

export default function NewslettersPage() {
  return (
    <FilesPage folderSlug="newsletters">
      <section>
        <h3>Newsletter Submission Guidelines</h3>
        <p>
          The purpose of the newsletter is to inform members, attenders and
          other interested people of Meeting news, including member interviews,
          news of Friends, other Quaker-related subjects, news of Quaker
          organizations, upcoming events, Meeting-sponsored projects, book
          reviews, etc. Articles and pictures are welcome. The deadline for the
          newsletter is the Sunday of the Meeting for Worship with a Concern for
          Business. Please e-mail your material in Word or text format to
          <a href="mailto:morningsidequakermeeting@gmail.com">
            morningsidequakermeeting@gmail.com
          </a>{" "}
          by the end of that day.
        </p>
      </section>
    </FilesPage>
  );
}
