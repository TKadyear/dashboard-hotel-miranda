import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./App/context-auth";
import { Login } from "./pages/Login";
import { NoMatch } from "./pages/NoMatch";
import { NavBar } from "./components/NavBar";
import styled from "styled-components";
import { links, dynamicLinks } from "./allPrivatesRoutes";

const Container = styled.div`
  display: block;
  padding-left: ${props => props.open ? "300px" : "70px"} ;
`;

const PrivateRoute = (props) => {
  const auth = useAuth();
  return !auth ? (<Navigate to="/login" />) : props.component;
};

function App() {
  const auth = useAuth();
  const [open, setOpen] = useState(false);
  const allRoutes = [...links].concat(dynamicLinks);
  return (
    <div>
      <NavBar auth={auth} open={open} setOpen={setOpen} links={links} />
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          {allRoutes.map((route, index) => (
            <Route
              key={route.name + index}
              path={route.path}
              element={<PrivateRoute component={
                <Container open={open}>
                  {route.page}
                </Container>
              } />} />))}
          <Route path="/*" element={<Container open={open}><NoMatch /></Container>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
