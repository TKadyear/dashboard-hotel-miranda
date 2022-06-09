import { Container } from "../components/style-component";
import { TopBar } from "../components/NavBar";
import { useSelector, useDispatch } from "react-redux";
import { bookingsList, fetchBookings } from "../features/bookings/bookingsSlice";
import { Table, StatusBadge } from "../components/TableStyleComponent";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pagination } from "../components/Pagination";
import { Page } from "../components/PageContainer";
import { splitForPagination } from "../services/pagination";

export const Bookings = () => {
  const bookedRooms = useSelector(bookingsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookings());
  }, []);

  const [page, setPage] = useState(0);
  const [roomsPage, setRoomsPage] = useState([]);
  useEffect(() => {
    setRoomsPage(() => splitForPagination(bookedRooms));
  }, [bookedRooms]);

  const dataToDisplay = ["Guest", "Order Date", "Check in", "Check out", "Special Request", "Status"];
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(id);
  };

  const handleChangePage = (number) => setPage(number);
  return (
    <Page>
      <TopBar>
        <h1>Bookings</h1>
      </TopBar>
      <Container>

        {roomsPage.length && <Table>
          <thead>
            <tr>{dataToDisplay.map((header, index) => <th key={index}>{header}</th>)}</tr>
          </thead>
          <tbody>
            {roomsPage[page].map(room => {
              return (<TableRow key={room.id} room={room} onClick={handleClick} />);
            })}
          </tbody>
        </Table>}
        {roomsPage.length && <Pagination allItems={bookedRooms} pages={roomsPage} onClick={handleChangePage} actualPage={page} />
        }
      </Container>
    </Page>);
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
