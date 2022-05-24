import { allContact } from "../features/contact/contactSlice";
import { useSelector } from "react-redux";
import { Box, IconButton } from "./style-component";
import { useEffect, useState } from "react";
import { splitForPagination } from "../services/pagination";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
export const RecentMessages = () => {
  const allMessages = useSelector(allContact);
  const [recentMessages, setRecentMessages] = useState(allMessages);
  const [page, setPage] = useState(0);
  useEffect(() => {
    setRecentMessages(splitForPagination(allMessages, 3));
  }, []);
  const handlePreviousPage = () => {
    setPage(prevPage => prevPage - 1 < 0 ? prevPage : prevPage - 1);
  };
  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1 < recentMessages.length ? prevPage + 1 : prevPage);
  };
  //IMPROVE Maybe It's better pass a conditional to the icons and make visibility hidden;
  return (
    <>
      <IconButton ><IoArrowBack onClick={handlePreviousPage} /></IconButton>
      {recentMessages[page].length && recentMessages[page].map(message => (
        <Box width="30%" height="250px" key={message.id}>
          <h3>{message.review.title}</h3>
          <p style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{message.review.comment}</p>
          <p>{message.review.date}</p>
        </Box>
      ))}
      <IconButton > < IoArrowForward onClick={handleNextPage} /></IconButton>
    </>
  );
};
