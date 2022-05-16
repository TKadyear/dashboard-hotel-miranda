import { TopBar, Container } from "../components/style-component";
import { useSelector } from "react-redux";
import { bookingsList } from "../features/bookings/bookingsSlice";
import { Table, StatusBadge } from "../components/TableStyleComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Bookings = () => {
  const [page, setPage] = useState(0);
  const rooms = useSelector(bookingsList);
  const dataToDisplay = ["Guest", "Order Date", "Check in", "Check out", "Special Request", "Status"];
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(id);
  };
  const handleNextPage = () => {
    setPage(prev => prev + 1 > rooms.length ? prev : prev + 1);
  };
  const handlePreviousPage = () => {
    setPage(prev => prev - 1 < 0 ? prev : prev - 1);
  };
  const handleChangePage = (number) => setPage(number);
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
          {rooms[page].map(room => {
            return (<TableRow key={room.id} room={room} onClick={handleClick} />);
          })}
        </tbody>
      </Table>
    </Container>
    <div>
      <button onClick={handlePreviousPage}>Previous Page</button>
      {rooms.map((v, i) => <button key={v + i} onClick={() => handleChangePage(i)}>{i + 1}</button>)}
      <button onClick={handleNextPage}>Next Page</button>
    </div>
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
