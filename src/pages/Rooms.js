import { TopBar, Container } from "../components/style-component";
import { Table, StatusBadge } from "../components/TableStyleComponent";
import { useSelector } from "react-redux";
import { roomList } from "../features/rooms/roomsSlice";


export const Rooms = () => {
  const rooms = useSelector(roomList);
  const dataToDisplay = ["Room Name", "Bed Type", "Room Number", "Facilities", "Rate", "Status"];
  return (<>
    <TopBar>
      <h1>Rooms</h1>
    </TopBar>
    <Container>
      <Table>
        <thead>
          {dataToDisplay.map((header, index) => <th key={index}>{header}</th>)}
        </thead>
        <tbody>
          {rooms.map(room => {
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
  </>);
};
