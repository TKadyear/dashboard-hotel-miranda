import { Container } from "../components/style-component";
import { TopBar } from "../components/NavBar";
import { useSelector } from "react-redux";
import { bookingsList } from "../features/bookings/bookingsSlice";
import { Table, StatusBadge } from "../components/TableStyleComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Pagination } from "../components/Pagination";
import { Page } from "../components/PageContainer";
import { splitForPagination } from "../services/pagination";
/* TODO Do the splitforpagination here and take out of the logic of the state.
*/
export const Bookings = () => {
  const [page, setPage] = useState(0);
  const bookedRooms = useSelector(bookingsList);
  const [roomsPage, setRoomsPage] = useState(splitForPagination(bookedRooms));
  const algo = () => setRoomsPage();
  console.log(typeof algo);
  // useEffect(() => {
  //   setRoomsPage(() => splitForPagination(bookedRooms));
  //   // console.table(roomsPage);
  // }, [bookedRooms]);

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

        <Table>
          <thead>
            <tr>{dataToDisplay.map((header, index) => <th key={index}>{header}</th>)}</tr>
          </thead>
          <tbody>
            {roomsPage[page].map(room => {
              return (<TableRow key={room.id} room={room} onClick={handleClick} />);
            })}
          </tbody>
        </Table>
        <Pagination allItems={bookedRooms} pages={roomsPage} onClick={handleChangePage} actualPage={page} />
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
