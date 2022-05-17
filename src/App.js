import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./App/context-auth";
import { Login } from "./pages/Login";
import { NoMatch } from "./pages/NoMatch";
import { NavBar } from "./components/NavBar";
import { links, dynamicLinks } from "./allPrivatesRoutes";


const PrivateRoute = (props) => {
  const auth = useAuth();
  return !auth ? (<Navigate to="/login" />) : props.component;
};

export const MenuOpenContext = React.createContext();
function App() {
  const [open, setOpen] = useState(false);
  const allRoutes = [...links].concat(dynamicLinks);
  return (
    <div>
      < MenuOpenContext.Provider value={open}>
        <NavBar setOpen={setOpen} links={links} />
        <div className="App">
          <Routes>
            <Route path="/login" element={<Login />} />
            {allRoutes.map((route, index) => (//All the privates Routes
              <Route key={route.name + index} path={route.path}
                element={<PrivateRoute component={route.page} />} />))}
            <Route path="/*" element={<NoMatch />} />
          </Routes>
        </div>
      </MenuOpenContext.Provider>
    </div>
  );
}

export default App;
