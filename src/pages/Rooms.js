import { TopBar } from "../components/base/style-component";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { roomList } from "../features/rooms/roomsSlice";
const Table = styled.table`
  background-color: white;
  border-radius: 12px;
`;
const StatusBadge = styled.div`
  color: white;
  text-align: center;
  background-color: ${props => props.status ? "#5ad07a" : "#e23428"};
  padding: 0.75rem;
  border-radius: 12px;
`;
export const Rooms = () => {
  const rooms = useSelector(roomList);
  const dataToDisplay = ["Room Name", "Bed Type", "Room Number", "Facilities", "Rate", "Status"];
  return (<>
    <TopBar>
      <h1>Rooms</h1>
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
  </>);
};
