import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { NoMatch } from "./pages/NoMatch";
import { links, dynamicLinks } from "./allPrivatesRoutes";

// TODO Check the validation of eslint
// TODO Check the dependencies of style components with vite
type Props = {
  component: JSX.Element
}
const PrivateRoute = ({ component }: Props) => {
  const auth = false;
  return !auth ? (<Navigate to="/login" />) : component;
};
function App() {
  const allRoutes = [...links].concat(dynamicLinks);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        {allRoutes.map((route, index) => (//All the privates Routes
          <Route key={route.name + index} path={route.path}
            element={<PrivateRoute component={route.page} />} />))}
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
