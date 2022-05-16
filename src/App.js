import { Bookings } from "./pages/Bookings";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Rooms } from "./pages/Rooms";
import { NoMatch } from "./pages/NoMatch";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/base/NavBar";
import { useAuth } from "./App/context-auth";
import styled from "styled-components";
import { useState } from "react";
import { ReactComponent as DashboardIcon } from "./assets/icons/dashboard.svg";
import { ReactComponent as BookingsIcon } from "./assets/icons/bookings.svg";
import { ReactComponent as RoomsIcon } from "./assets/icons/rooms.svg";
import { ReactComponent as ContactIcon } from "./assets/icons/contact.svg";
import { ReactComponent as UsersIcon } from "./assets/icons/users.svg";
import { Users } from "./pages/Users";
import { BookedRoom } from "./pages/BookedRoom";
import { NewUser } from "./pages/NewUser";
import { UserEdit } from "./pages/UserEdit";
const Container = styled.div`
  display: block;
  padding-left: ${props => props.open ? "300px" : "70px"} ;
`;

const PrivateRoute = (props) => {
  const auth = useAuth();
  // TODO Make a real auth Login
  return !auth ? (<Navigate to="/login" />) : props.component;
};

function App() {
  const auth = useAuth();
  const [open, setOpen] = useState(false);
  // TODO Change the layout for the differents routes
  const links = [{
    path: "/",
    name: "Dashboard",
    icon: <DashboardIcon />
  },
  {
    path: "/rooms",
    name: "Rooms",
    icon: <RoomsIcon />
  },
  {
    path: "/bookings",
    name: "Bookings",
    icon: <BookingsIcon />
  },
  {
    path: "/contact",
    name: "Contact",
    icon: <ContactIcon />
  },
  {
    path: "/users",
    name: "Users",
    icon: <UsersIcon />
  }
  ];
  return (
    <div>
      <NavBar auth={auth} open={open} setOpen={setOpen} links={links} />
      <div className="App">
        <Routes>
          <Route path="/" element={<PrivateRoute component={
            <Container open={open}>
              <Home />
            </Container>
          } />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms" element={<PrivateRoute component={
            <Container open={open}>
              <Rooms />
            </Container>
          } />} />
          <Route path="bookings" element={<PrivateRoute component={
            <Container open={open}>
              <Bookings />
            </Container>
          } />} />
          <Route path="bookings/:id" element={<PrivateRoute component={
            <Container open={open}>
              <BookedRoom />
            </Container>
          } />} />
          <Route path="/contact" element={<PrivateRoute component={
            <Container open={open}>
              <Contact />
            </Container>
          } />} />
          <Route path="/users" element={<PrivateRoute component={
            <Container open={open}>
              <Users />
            </Container>
          } />} />
          <Route path="users/new-user" element={<PrivateRoute component={
            <Container open={open}>
              <NewUser />
            </Container>
          } />} />
          <Route path="users/:id/edit" element={<PrivateRoute component={
            <Container open={open}>
              <UserEdit />
            </Container>
          } />} />
          <Route path="/*" element={<Container open={open}><NoMatch /></Container>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
