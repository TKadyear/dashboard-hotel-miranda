// import { Calendar } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import listPlugin from "@fullcalendar/list";
import styled from "styled-components";
// let calendar = new Calendar(calendarEl, {
//   plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
//   initialView: 'dayGridMonth',
//   headerToolbar: {
//     left: 'prev,next today',
//     center: 'title',
//     right: 'dayGridMonth,timeGridWeek,listWeek'
//   }
// });
const FullCalendarWrapper = styled.div`
border-radius: 12px;
margin: 2.25rem 0;
width: 45%;
padding: 1rem 2rem 2rem;
background: ${props => props.theme.colors.white};
`;

export const CalendarBookedRooms = () => {
  return (
    <FullCalendarWrapper>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      />
    </FullCalendarWrapper>
  );
};
