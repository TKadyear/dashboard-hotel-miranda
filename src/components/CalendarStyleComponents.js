import styled from "styled-components";

export const FullCalendarWrapper = styled.div`
  border-radius: 12px;
  margin: 2.25rem 0;
  width: 45%;
  padding: 2rem 2rem;
  background: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.font};
  box-shadow:${props => props.theme.boxShadow.dirY} ;
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

  .fc .fc-daygrid-day-frame,
  .fc .fc-daygrid-day-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
/*Clear the :before */
  .fc-daygrid-day-frame:before, .fc-daygrid-day-events:before, .fc-daygrid-event-harness:before,
  .fc-daygrid-day-frame:after, .fc-daygrid-day-events:after, .fc-daygrid-event-harness:after {
    display: none;
  }
  .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
      display: none;
  }
  /* Clear scrollBar style */
  .fc .fc-scroller-liquid-absolute{
    /*Because Full Calendar was applying the style = >overflow in the html markup */
    overflow: hidden!important;
  }
  .fc .fc-daygrid-day.fc-day-today{
    /* Removed the yellow bg */
    background-color: inherit;
    font-weight: bold;
  }
`;
