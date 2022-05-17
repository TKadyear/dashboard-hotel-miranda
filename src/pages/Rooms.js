import { TopBar, Container } from "../components/style-component";
import { Table, StatusBadge, TRowDnd } from "../components/TableStyleComponent";
import { useSelector } from "react-redux";
import { roomList, reestructureList } from "../features/rooms/roomsSlice";
import { Pagination } from "../components/Pagination";
import { useCallback, useState } from "react";
import { splitForPagination } from "../services/pagination";
import { Page } from "../components/PageContainer";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";

const ItemType = "room";

export const Rooms = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const rooms = useSelector(roomList);
  // const [room, setRoom] = useState(rooms);
  const roomsPages = splitForPagination(rooms);

  const dataToDisplay = ["Room Name", "Bed Type", "Room Number", "Facilities", "Rate", "Status"];

  const handleChangePage = (number) => setPage(number);
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    // IMPROVE Only call dispatch the room when the drag is over
    // BUG In the second page is not working the DnD
    dispatch(reestructureList({ dragIndex: dragIndex, hoverIndex: hoverIndex }));
    // setRoom((prevCards) =>
    //   update(prevCards, {
    //     $splice: [
    //       [dragIndex, 1],
    //       [hoverIndex, 0, prevCards[dragIndex]],
    //     ],
    //   }),
    // );
  }, []);
  const renderRoom = useCallback((room, index) => <TableRow key={room.id} index={index} room={room} moveCard={moveCard} />);
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
          {roomsPages[page].map((room, index) => renderRoom(room, index))}
        </tbody>
      </Table>
    </Container>
    <Pagination pages={roomsPages} onClick={handleChangePage} actualPage={page} />
  </Page>);
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
  // const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <TRowDnd ref={ref} isDragging={isDragging} data-handler-id={handlerId}>
      <td>{room.id}</td>
      <td>{room.info.bedType}</td>
      <td>{room.info.number}</td>
      <td>{room.info.facilities}</td>
      <td>{room.rate}</td>
      <td><StatusBadge status={room.available}>{room.available ? "Available" : "Booked"}</StatusBadge></td>
    </TRowDnd>
  );
};
