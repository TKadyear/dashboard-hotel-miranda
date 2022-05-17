import { TopBar, Container } from "../components/style-component";
import { Table, StatusBadge } from "../components/TableStyleComponent";
import { useSelector } from "react-redux";
import { roomList } from "../features/rooms/roomsSlice";
import { Pagination } from "../components/Pagination";
import { useState } from "react";
import { splitForPagination } from "../services/pagination";
import { Page } from "../components/PageContainer";

export const Rooms = () => {
  const [page, setPage] = useState(0);
  const rooms = useSelector(roomList);
  const roomsPages = splitForPagination(rooms);
  const dataToDisplay = ["Room Name", "Bed Type", "Room Number", "Facilities", "Rate", "Status"];
  const handleChangePage = (number) => setPage(number);
  return (<Page>
    <TopBar>
      <h1>Rooms</h1>
    </TopBar>
    <Container>
      <Table>
        <thead>
          {dataToDisplay.map((header, index) => <tr key={index}><th >{header}</th></tr>)}
        </thead>
        <tbody>
          {roomsPages[page].map(room => {
            // console.log(room);
            return (
              <tr key={room.id} >
                <td>{room.id}</td>
                <td>{room.info.bedType}</td>
                <td>{room.info.number}</td>
                <td>{room.info.facilities}</td>
                <td>{room.rate}</td>
                <td><StatusBadge status={room.available}>{room.available ? "Available" : "Booked"}</StatusBadge></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
    <Pagination pages={roomsPages} onClick={handleChangePage} actualPage={page} />
  </Page>);
};
