import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../App/context-auth";

const SideBar = styled.div`
  height: 100vh;
  width: ${props => props.open ? "200px" : "75px"};
  padding: 1rem;
  background-color: white;
  /* position: fixed; */
  display: ${props => props.auth ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-around;
  transition: 0.5s;
  box-shadow: 4px 0 24px #58565617;
  a {
    display: ${props => props.open ? "block" : "none"};
  }
`;
// TODO que no se vea si no estas logeado, dato que pasa por redux
export const NavBar = (props) => {
  const auth = useAuth();
  return (
    <SideBar auth={auth} open={props.open} onClick={() => props.setOpen(prev => !prev)}>
      <p>Logo</p>
      {props.links.map(route => (<Link key={route} to={`/${route === "Dashboard" ? "" : route.toLowerCase()}`}>{route}</Link>))}

    </SideBar>
  );
};
