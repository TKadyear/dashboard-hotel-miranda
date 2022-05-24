import { Container, BoxFlexRow } from "../components/style-component";
import { Page } from "../components/PageContainer";
import { TopBar } from "../components/NavBar";
import { RecentMessages } from "../components/RecentMessages";
import { allContact } from "../features/contact/contactSlice";
import { useSelector } from "react-redux";
import { Table, StatusBadge } from "../components/TableStyleComponent";
export const Contact = () => {
  const contact = useSelector(allContact);
  const dataToDisplay = ["Order ID", "Date", "Customer", "Comment", "Action"];

  return (
    <Page>
      <TopBar>
        <h1>Contact</h1>
      </TopBar>
      <Container>
        <BoxFlexRow bg="transparent" notBoxShadow={true}>
          <RecentMessages />
        </BoxFlexRow>
        <Table>
          <thead>
            <tr>{dataToDisplay.map((header, index) => <th key={index}>{header}</th>)}</tr>
          </thead>
          <tbody>
            {contact.map(room => {
              return (<TableRow key={room.id} room={room} />);
            })}
          </tbody>
        </Table>

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
