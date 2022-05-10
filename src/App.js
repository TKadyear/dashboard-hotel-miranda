import { Bookings } from "./pages/Bookings";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Rooms } from "./pages/Rooms";
import { NoMatch } from "./pages/NoMatch";
import { Routes, Route, Link, Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  let auth;
  auth = false;
  // TODO Make a real auth Login
  return !auth ? (<Navigate to="/login" />) : props.component;
};


function App() {
  // TODO Change the layout for the differents routes
  return (
    <>
      <header className="App-header">
        <p >Aqui va un navBar</p>
        <Link to="/"> Home</Link>
        <Link to="/rooms"> Rooms</Link>
        <Link to="/contact">Contact </Link>
        <Link to="/bookings"> Bookings</Link>

      </header>
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
    </>
  );
}

export default App;
