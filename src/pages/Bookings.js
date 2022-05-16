import { TopBar, Container } from "../components/base/style-component";
import { useSelector } from "react-redux";
import { bookingsList } from "../features/bookings/bookingsSlice";
import { Table, StatusBadge } from "../components/TableStyleComponent";
import { useNavigate } from "react-router-dom";
export const Bookings = () => {
  const rooms = useSelector(bookingsList);
  const dataToDisplay = ["Guest,", "Order Date", "Check in", "Check out", "Special Request", "Status"];
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(id);
  };
  return (<>
    <TopBar>
      <h1>Bookings</h1>
    </TopBar>
    <Container>

      <Table>
        <thead>
          <tr>{dataToDisplay.map((header, index) => <th key={index}>{header}</th>)}</tr>
        </thead>
        <tbody>
          {rooms.map(room => {
            return (<TableRow key={room.id} room={room} onClick={handleClick} />);
          })}
        </tbody>
      </Table>
    </Container>
  </>);
};
const TableRow = ({ room, onClick }) => (<tr onClick={() => onClick(room.id)}>
  <td>{room.guest}</td>
  <td>{room.order_date}</td>
  <td>{room.booking.check_in}</td>
  <td>{room.booking.check_in}</td>
  <td>View Notes</td>
  <td>{room.status}</td>
  <td><StatusBadge status={room.available}>{room.available ? "Available" : "Booked"}</StatusBadge></td>
</tr>);
