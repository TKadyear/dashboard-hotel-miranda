import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../App/context-auth";
import { useLocation } from "react-router-dom";
const SideBar = styled.div`
  height: 100vh;
  width: ${props => props.open ? "300px" : "70px"};
  background-color: white;
  position: fixed;
  display: ${props => props.auth ? "flex" : "none"};
  flex-direction: column;
  justify-content: space-around;
  transition: 0.5s;
  box-shadow: ${props => props.theme.boxShadow.dirX};
  :hover{
    /* width: 300px; */
  }
  img {
    max-width: 40px;
    grid-row: 1/3;
    }

`;
const Link = styled(NavLink)`
  text-decoration: none;
  /* font-weight: 300; */
  display: ${props => props.open ? "block" : "none"};
  :visited{
    color:inherit;
  }
`;
const Section = styled.div`
  display: flex;
  padding-left: 1.5rem;
  position: relative;
  gap: 1rem;
  color: ${props => props.active ? props.theme.colors.secondaryRed + "!important" : props.theme.colors.light}; /*Sino no me dejaba ponerlo */
  font-weight: ${props => props.active ? "500" : "300"}; /*Sino no me dejaba ponerlo */
  cursor: pointer;
  :hover{
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    path{
      fill: ${props => props.theme.colors.primary};
    }
  }
  svg{
    width: 24px;
    height: 24px;
    path{
      fill:${props => props.active ? props.theme.colors.secondaryRed + "!important" : props.theme.colors.light};
    }
  }
  :before{
    content: "";
    position: absolute;
    left:0;
    top: -10px;
    width: 3px;
    height: 45px;
    border-radius: 0 4px 4px 0;
    background-color: ${props => props.active ? props.theme.colors.secondaryRed : ""};
  }
`;
const Title = styled.p`
  display: ${props => props.open ? "block" : "none"};
  font-size: 1.5rem;
  margin:0;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: ${props => props.theme.colors.textColor};
`;
const Subtitle = styled.p`
  display: ${props => props.open ? "block" : "none"};
  margin:0;
  grid-column: 2;
  font-size: 12px;
  color: ${props => props.theme.colors.inactiveTabs};
`;
const Logo = styled.div`
  padding-left: 1rem;
  cursor:pointer;
  display:grid;
  column-gap: 1rem;
  grid-template-columns: 40px 1fr;

`;


export const NavBar = (props) => {
  const auth = useAuth();
  const handleClick = () => props.setOpen(prev => !prev);
  const { pathname } = useLocation();

  return (
    <SideBar auth={auth} open={props.open} >
      <Logo onClick={handleClick}>
        <img src="./img/LogoHotel.svg" alt="logo hotel" />
        <Title open={props.open}>travl</Title>
        <Subtitle open={props.open} >Hotel Admin Dashboard</Subtitle>
      </Logo>
      {props.links.map(route => (
        <Section key={route.name} onClick={handleClick} active={pathname === route.path}>
          {route.icon}
          <Link
            open={props.open}
            to={route.path}>{route.name}</Link>
        </Section >
      ))
      }

    </SideBar >
  );
};
