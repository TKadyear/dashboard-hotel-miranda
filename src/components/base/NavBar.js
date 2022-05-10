import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
const SideBar = styled.div`
  height: 100vh;
  width: ${props => props.open ? "100px" : "24px"};
  padding: 1.5rem;
  background-color: grey;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: 0.5s;
  a {
    display: ${props => props.open ? "block" : "none"};
  }
`;

export const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <SideBar open={open} onClick={() => setOpen(prev => !prev)}>
      {props.links.map(route => (<Link key={route} to={`/${route === "Dashboard" ? "" : route.toLowerCase()}`}>{route}</Link>))}

    </SideBar>
  );
};
