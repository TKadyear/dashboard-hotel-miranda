import { Bookings } from "./pages/Bookings";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import { NoMatch } from "./pages/NoMatch";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <header className="App-header">
        <p>Aqui va un navBar</p>
        <Link to="/"> Home</Link>
        <Link to="/rooms"> Rooms</Link>
        <Link to="/contact">Contact </Link>
        <Link to="/bookings"> Bookings</Link>

      </header>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NoMatch />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
