import { useNavigate } from "react-router-dom";

export const PrivateRoute = () => {
  let auth;
  auth = true;
  const Navigate = useNavigate();
  return (auth ? <Routes /> : Navigate("/login"));
};


