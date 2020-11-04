import React, { useState, useEffect, Fragment } from "react";
import CoreLayout from "../../components/coreLayout";
import Calendar, { CALENDAR_IDS } from "../../components/calendar";

const allCalendarIds = Object.values(CALENDAR_IDS);

const CalendarPage = () => {
  return (
    <React.Fragment>
      <CoreLayout withSubtitle={false}>
        <Calendar calendarIds={allCalendarIds} />
      </CoreLayout>
    </React.Fragment>
  );
};
export default CalendarPage;
