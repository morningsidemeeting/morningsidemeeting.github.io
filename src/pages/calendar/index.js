import React, { useState, useEffect, Fragment } from "react";
import CoreLayout from "../../components/coreLayout";
import Calendar from "../../components/calendar";

const CalendarPage = () => {
  return (
    <React.Fragment>
      <CoreLayout withSubtitle={false}>
        <Calendar />
      </CoreLayout>
    </React.Fragment>
  );
};
export default CalendarPage;
