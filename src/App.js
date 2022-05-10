import { Bookings } from "./pages/Bookings";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Rooms } from "./pages/Rooms";
import { NoMatch } from "./pages/NoMatch";
import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/base/NavBar";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const PrivateRoute = (props) => {
  let auth;
  auth = true;
  // TODO Make a real auth Login
  return !auth ? (<Navigate to="/login" />) : props.component;
};

function App() {
  // TODO Change the layout for the differents routes
  return (
    <Container>
      <NavBar links={["Dashboard", "Rooms", "Contact", "Bookings"]} />
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
