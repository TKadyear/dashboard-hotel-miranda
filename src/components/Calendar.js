// import { Calendar } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import listPlugin from "@fullcalendar/list";
import styled from "styled-components";

const FullCalendarWrapper = styled.div`
  border-radius: 12px;
  margin: 2.25rem 0;
  width: 45%;
  padding: 1rem 2rem 2rem;
  background: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.font};
  .fc-theme-standard .fc-scrollgrid, .fc-theme-standard th, .fc-scrollgrid td{
     border:0;
    }
  th{
    font-weight: 400;
    color: ${props => props.theme.colors.light};
  }
  .fc .fc-button-primary{
    background-color: none;
    border: 0;
    color: ${props => props.theme.colors.light};
  }
`;

export const CalendarBookedRooms = () => {
  // start: "Recent Booking Schedule",
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
