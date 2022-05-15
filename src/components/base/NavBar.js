import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../App/context-auth";

const SideBar = styled.div`
  box-sizing: content-box;
  height: 100vh;
  width: ${props => props.open ? "200px" : "40px"};
  padding: 1rem 2.5rem 2rem;
  background-color: white;
  position: fixed;
  display: ${props => props.auth ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-around;
  transition: 0.5s;
  box-shadow: ${props => props.theme.boxShadow.dirX};
  img {
    max-width: 40px;
    grid-row: 1/3;
    }

`;
const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 300;
  color: #135846!important; /*Sino no me dejaba ponerlo */
  display: ${props => props.open ? "block" : "none"};
  :visited{
    color:inherit;
  }
  :hover
 :active{
    /* color: red!im; */
  }
`;
const Section = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
  svg{
    width: 24px;
    height: 24px;
    path{
      fill:${props => props.theme.colors.light};
    }
  }
`;
const Title = styled.p`
  display: ${props => props.open ? "block" : "none"};
  font-size: 1.5rem;
  margin:0;
  font-family: 'Open Sans', sans-serif;
    font-weight: bold;
  color: ${props => props.theme.colors.textColor};
  opacity: 1;
  `;
const Subtitle = styled.p`
  display: ${props => props.open ? "block" : "none"};
  margin:0;
  grid-column: 2;
  font-size: 12px;
  color: ${props => props.theme.colors.inactiveTabs};
`;
const Logo = styled.div`
  display:grid;
  column-gap: 1rem;
  grid-template-columns: 40px 1fr;

`;
// TODO que no se vea si no estas logeado, dato que pasa por redux
export const NavBar = (props) => {
  const auth = useAuth();
  return (
    <SideBar auth={auth} open={props.open} >
      <Logo>
        <img src="./img/LogoHotel.svg" alt="logo hotel" />
        <Title open={props.open}>travl</Title>
        <Subtitle open={props.open} >Hotel Admin Dashboard</Subtitle>
      </Logo>
      {props.links.map(route => (
        <Section key={route.name} onClick={() => props.setOpen(prev => !prev)}
        >
          {route.icon}
          <Link
            open={props.open}
            to={route.path}>{route.name}</Link>
        </Section >
      ))}

    </SideBar>
  );
};
