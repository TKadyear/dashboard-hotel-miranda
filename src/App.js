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

const Container = styled.div`
  display: ${props => props.auth ? "grid" : "block"};
  grid-template-columns: 200px 1fr;
  /* grid-template-columns: ${props => props.open ? "200px 1fr" : "75px 1fr"} ; */
  grid-template-rows: 80px 1fr;
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
  return (
    <Container open={open} auth={auth}>
      <NavBar auth={auth} open={open} setOpen={setOpen} links={["Dashboard", "Rooms", "Contact", "Bookings"]} />
      <div className="App">
        <Routes>
          <Route path="/" element={<PrivateRoute component={<Home />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rooms" element={<PrivateRoute component={<Rooms />} />} />
          <Route path="/bookings" element={<PrivateRoute component={<Bookings />} />} />
          <Route path="/contact" element={<PrivateRoute component={<Contact />} />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </div>
    </Container>
  );
}

export default App;
