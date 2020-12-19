import React from "react";
import CoreLayout from "../../components/coreLayout";
import Calendar, { CALENDAR_IDS } from "../../components/calendar";

const allCalendarIds = Object.values(CALENDAR_IDS);

const CalendarPage = () => {
  return (
    <CoreLayout withSubtitle={false}>
      <Calendar calendarIds={allCalendarIds} />
    </CoreLayout>
  );
};
export default CalendarPage;
