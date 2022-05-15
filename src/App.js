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
          <Route path="/bookings" element={<PrivateRoute component={
            <Container open={open}>
              <Bookings />
            </Container>
          } />} />
          <Route path="/contact" element={<PrivateRoute component={
            <Container open={open}>
              <Contact />
            </Container>
          } />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
