import React, { Children } from "react";
import { Helmet } from "react-helmet";

export function getGapi() {
  return new Promise((resolve, reject) => {
    let sanity = 0;
    waitForGapi();

    function waitForGapi() {
      sanity++;
      if (typeof window === "undefined" || typeof window.gapi == "undefined") {
        if (sanity > 10) {
          reject("Could not find gapi");
        } else {
          setTimeout(waitForGapi, 1000);
        }
      } else {
        resolve(window.gapi);
      }
    }
  });
}

const Gapi = () => {
  return (
    <Helmet>
      <script async defer src="https://apis.google.com/js/api.js"></script>
    </Helmet>
  );
};

export default Gapi;
