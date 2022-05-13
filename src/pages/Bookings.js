import { TopBar } from "../components/base/style-component";
import { useSelector } from "react-redux";
import { bookingsList } from "../features/bookings/bookingsSlice";
import styled from "styled-components";
const Table = styled.table`
  background-color: white;
  border-radius: 12px;
  padding:1rem;
`;
const StatusBadge = styled.div`
  color: white;
  text-align: center;
  background-color: ${props => props.status ? "#e23428" : "#5ad07a"};
  padding: 0.75rem;
  border-radius: 12px;
`;
export const Bookings = () => {
  const rooms = useSelector(bookingsList);
  const dataToDisplay = ["Guest", "Order Date", "Check in", "Check out", "Special Request", "Status"];

  return (<>
    <TopBar>
      <h1>Bookings</h1>
    </TopBar>
    <Table>
      <thead>
        {dataToDisplay.map((header, index) => <th key={index}>{header}</th>)}
      </thead>
      <tbody>
        {rooms.map(room => {
          console.log(room);
          return (
            <tr key={room.id} >
              <td>{room.guest}</td>
              <td>{room.order_date}</td>
              <td>{room.booking.check_in}</td>
              <td>{room.booking.check_in}</td>
              <td>View Notes</td>
              <td>{room.status}</td>
              <td><StatusBadge status={room.available}>{room.available ? "Available" : "Booked"}</StatusBadge></td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  </>);
};
