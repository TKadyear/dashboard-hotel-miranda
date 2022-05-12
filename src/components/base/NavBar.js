import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useAuth } from "../../App/context-auth";
const SideBar = styled.div`
  height: 100vh;
  width: ${props => props.open ? "100px" : "24px"};
  padding: 1.5rem;
  background-color: grey;
  display: ${props => props.auth ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-around;
  transition: 0.5s;
  a {
    display: ${props => props.open ? "block" : "none"};
  }
`;
// TODO que no se vea si no estas logeado, dato que pasa por redux
export const NavBar = (props) => {
  const auth = useAuth();
  const [open, setOpen] = useState(false);
  return (
    <SideBar auth={auth} open={open} onClick={() => setOpen(prev => !prev)}>
      <p>Logo</p>
      {props.links.map(route => (<Link key={route} to={`/${route === "Dashboard" ? "" : route.toLowerCase()}`}>{route}</Link>))}

    </SideBar>
  );
};
