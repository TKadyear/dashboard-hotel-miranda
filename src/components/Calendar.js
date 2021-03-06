import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { FullCalendarWrapper } from "./CalendarStyleComponents";

export const CalendarBookedRooms = () => {
  const headerToolbar = {
    start: "",
    center: "",
    end: "prev,title,next"
  };
  return (
    <FullCalendarWrapper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        headerToolbar={headerToolbar}
      />
    </FullCalendarWrapper>
  );
};
