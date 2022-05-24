import { TopBar } from "../components/NavBar";
import { Page } from "../components/PageContainer";
import { useSelector } from "react-redux";
import { Table, StatusBadge } from "../components/TableStyleComponent";
import { useState, useEffect } from "react";
import { splitForPagination } from "../services/pagination";
import { Pagination } from "../components/Pagination";
import { allUsers } from "../features/users/usersSlice";
import { Container } from "../components/style-component";

export const Users = () => {
  const users = useSelector(allUsers);
  const [usersPages, setUsersPages] = useState(splitForPagination(users));
  const [page, setPage] = useState(0);
  const dataToDisplay = ["Name", "Job Desk", "E-mail", "Status"];
  useEffect(() => {
    setUsersPages(splitForPagination(users));
  }, [users]);
  const handleChangePage = (number) => setPage(number);

  return (
    <Page>
      <TopBar>
        <h1>Users</h1>
      </TopBar>
      <Container>
        <Table>
          <thead>
            <tr>{dataToDisplay.map((header, index) => <th key={index}>{header}</th>)}</tr>
          </thead>
          <tbody>
            {usersPages[page].map(room => {
              return (<TableRow key={room.id} room={room} />);
            })}
          </tbody>
        </Table>
        <Pagination allItems={users} pages={usersPages} onClick={handleChangePage} actualPage={page} />

      </Container>
    </Page>
  );
};


const TableRow = ({ room }) => (
  <tr>
    <td>{room.personal_info.firstName + " " + room.personal_info.surname}</td>
    <td>{room.job.role}<br /> {room.job.duties}</td>
    <td>{room.personal_info.email}</td>
    <td><StatusBadge status={!room.state}>{room.state ? "Active" : "Inactive"}</StatusBadge></td>
  </tr>
);
