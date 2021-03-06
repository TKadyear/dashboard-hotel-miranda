import { Container } from "../components/style-component";
import { TopBar } from "../components/NavBar";
import { Table, StatusBadge, TRowDnd } from "../components/TableStyleComponent";
import { useSelector } from "react-redux";
import { roomList } from "../features/rooms/roomsSlice";
import { Page } from "../components/PageContainer";
import { useDrag, useDrop, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect, useState, useRef, useCallback } from "react";
import update from "immutability-helper";

const ItemType = "room";

export const Rooms = () => {
  const rooms = useSelector(roomList);
  const [roomsSorted, setRoomsSorted] = useState([...rooms]);
  const dataToDisplay = ["Room Name", "Bed Type", "Room Number", "Facilities", "Rate", "Status"];
  const sortDefault = "number";
  useEffect(() => {
    setRoomsSorted([...rooms].sort((a, b) => a.info[sortDefault] - b.info[sortDefault]));
  }, []);

  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setRoomsSorted((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    );
  }, []);
  const renderRoom = useCallback((room, index) => <TableRow key={room.id} index={index} room={room} moveCard={moveCard} />);
  return (
    <DndProvider backend={HTML5Backend}>
      <Page>
        <TopBar>
          <h1>Rooms</h1>
        </TopBar>
        <Container>
          <Table>
            <thead>
              <tr>{dataToDisplay.map((header, index) => <th key={index}>{header}</th>)}</tr>
            </thead>
            <tbody>
              {roomsSorted.map((room, index) => renderRoom(room, index))}
            </tbody>
          </Table>
        </Container>
      </Page>
    </DndProvider>
  );
};
const TableRow = ({ room, moveCard, index }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemType,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: () => {
      const id = room.id;
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));
  return (
    <TRowDnd ref={ref} isDragging={isDragging} data-handler-id={handlerId}>
      <td>{room.info.bedType + "-" + room.info.number}</td>
      <td>{room.info.bedType}</td>
      <td>{room.info.number}</td>
      <td>{room.info.facilities}</td>
      <td>{room.rate}</td>
      <td><StatusBadge status={room.available}>{room.available ? "Available" : "Booked"}</StatusBadge></td>
    </TRowDnd>
  );
};
