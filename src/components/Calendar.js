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
  padding: 2rem 2rem;
  background: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.font};
  .fc-theme-standard .fc-scrollgrid, .fc-theme-standard th, .fc-scrollgrid td{
     border:0;
  }
  th{
    font-weight: 400;
    color: ${props => props.theme.colors.light};
  }
  .fc .fc-toolbar-chunk:first-child:before{
    content:"Recent Booking Schedule";
  }
  .fc .fc-toolbar-chunk:last-child{
    div{
      display:grid;
      grid-template-columns: 30px 1fr 30px;
      gap: 1rem;
    }
  }
  .fc-toolbar-title, .fc .fc-toolbar-chunk:first-child:before{
    font-weight: 500;
    font-size: 1.125rem;
  }
  .fc .fc-button{
    padding: 0;
  }
  .fc .fc-button-primary{
    background-color: ${props => props.theme.colors.white};
    border: 0;
    border-radius: 50%;
    color: ${props => props.theme.colors.light};
    transition: 0.2s;
    :hover{
      box-shadow:${props => props.theme.boxShadow.md} ;
    }
    :active{
      background-color: ${props => props.theme.colors.light};
      color: ${props => props.theme.colors.active};
    }
    :focus{
      border:0;
    }
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
