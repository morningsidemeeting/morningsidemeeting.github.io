import React from "react";
import CoreLayout from "../../components/coreLayout";

export default function SharePage() {
  return (
    <CoreLayout withSubtitle={false}>
      <section>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSduWq8tRwHnHzr4_BFJ4v89ZYL6okhw31pAqawNUSDHpGsvGw/viewform?embedded=true"
          width="640"
          height="1700"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="Share News Form"
          style={{ margin: "0 auto", width: "640px", display: "block" }}
        >
          Loading…
        </iframe>
      </section>
    </CoreLayout>
  );
}
