import React from "react";
import CoreLayout from "../../components/coreLayout";
import Calendar from "../../components/calendar";
import CALENDAR_IDS from "../../shared/calendarIds.json";

const allCalendarIds = Object.values(CALENDAR_IDS);

const CalendarPage = () => {
  return (
    <CoreLayout withSubtitle={false}>
      <Calendar calendarIds={allCalendarIds} />
    </CoreLayout>
  );
};
export default CalendarPage;
