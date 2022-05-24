import { Container, BoxFlexRow } from "../components/style-component";
import { Page } from "../components/PageContainer";
import { TopBar } from "../components/NavBar";
import { RecentMessages } from "../components/RecentMessages";
import { allContact } from "../features/contact/contactSlice";
import { useSelector } from "react-redux";
import { Table, StatusBadge } from "../components/TableStyleComponent";
import { useState, useEffect } from "react";
import { splitForPagination } from "../services/pagination";
import { Pagination } from "../components/Pagination";

export const Contact = () => {
  const contact = useSelector(allContact);
  const [contactPages, setContactPages] = useState(splitForPagination(contact));
  const [page, setPage] = useState(0);
  const dataToDisplay = ["Order ID", "Date", "Customer", "Comment", "Action"];
  useEffect(() => {
    setContactPages(splitForPagination(contact));
  }, [contact]);
  const handleChangePage = (number) => setPage(number);

  return (
    <Page>
      <TopBar>
        <h1>Contact</h1>
      </TopBar>
      <Container style={{ paddingTop: "0" }}>
        <BoxFlexRow bg="transparent" notBoxShadow={true}>
          <RecentMessages />
        </BoxFlexRow>
        <Table>
          <thead>
            <tr>{dataToDisplay.map((header, index) => <th key={index}>{header}</th>)}</tr>
          </thead>
          <tbody>
            {contactPages[page].map(room => {
              return (<TableRow key={room.id} room={room} />);
            })}
          </tbody>
        </Table>
        <Pagination allItems={contact} pages={contactPages} onClick={handleChangePage} actualPage={page} />

      </Container>
    </Page>
  );
};


const TableRow = ({ room }) => (
  <tr>
    <td>{room.id}</td>
    <td>{room.review.date}</td>
    <td>{room.customer.fullName}<br /> {room.customer.email}</td>
    <td>{room.review.title}</td>
    <td><StatusBadge status={!room.archived}>{room.archived ? "Archived" : "Publish"}</StatusBadge></td>
  </tr>
);
