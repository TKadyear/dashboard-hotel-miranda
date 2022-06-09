import styled from "styled-components";
import { ContainerCard, Button } from "./style-component.js";
import { NavLink } from "react-router-dom";

export const SideBar = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: ${props => props.open ? "300px" : "70px"};
  padding: 1rem;
  display:grid;
  grid-template-columns: 100%;
  grid-template-rows: 64px repeat(5,45px) 3fr 1fr;
  align-items: center;
  gap: 0.75rem;
  background-color: white;
  transition: 0.1s;
  box-shadow: ${props => props.theme.boxShadow.dirX};
  z-index: 1;
  img {
    max-width: 40px;
    grid-row: 1/3;
    }
  @media ${props => props.theme.breakpoint.down.sm}{
    width: ${props => props.open ? "100vw" : ""};
    display: ${props => props.open ? "inherit" : "none"};
  }

`;
export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 300;
  display: ${props => props.open ? "block" : "none"};
  :visited{
    color:inherit;
  }
`;
export const Section = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;
  color: ${props => props.active ? props.theme.colors.secondaryRed + "!important" : props.theme.colors.light}; /*Sino no me dejaba ponerlo */
  font-weight: ${props => props.active ? "500" : "300"}; /*Sino no me dejaba ponerlo */
  cursor: pointer;
  justify-self: ${props => props.open ? "" : "center"};
  /* padding-left: 0.5rem; */
  :hover{
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    path{
      fill: ${props => props.theme.colors.primary};
    }
  }
  &::first-of-type{
    margin-top: 65px;
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
    left: ${props => props.open ? "-1rem" : "-1.45rem"};
    top: -10px;
    width: 3px;
    height: 45px;
    border-radius: 0 4px 4px 0;
    background-color: ${props => props.active ? props.theme.colors.secondaryRed : ""};
  }
`;
export const Title = styled.p`
  display: ${props => props.open ? "block" : "none"};
  font-size: 1.5rem;
  margin:0;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: ${props => props.theme.colors.textColor};
`;
export const Subtitle = styled.p`
  display: ${props => props.open ? "block" : "none"};
  margin:0;
  grid-column: 2;
  font-size: 12px;
  color: ${props => props.theme.colors.inactiveTabs};
`;
export const Logo = styled.div`
  /* padding-left: ${props => props.pL ? props.pL : 0}; */
  cursor: pointer;
  display: grid;
  column-gap: 1rem;
  grid-template-columns: 40px 1fr;
  align-items: center;
`;
export const ContactCard = styled(ContainerCard)`
  display: ${props => props.open ? "grid" : "none"};
  box-sizing: content-box;
  padding: 1.75rem;
  width: 60%;
  max-width: 230px;
  max-height: 190px;
  margin: 0 auto;
  box-shadow: 0 14px 20px #58565650;
  p{
    font-weight:300;
    font-size: 12px;
    color:${props => props.theme.inactiveTabs}
  }
  strong{
    font-size: 18px;
    color:${props => props.theme.textColor}
  }
  ::after{
  background:${props => props.img ? `url(${props.img}) no-repeat` : "lightgrey"};
  }
  `;
export const BtnContact = styled(Button)`
  background-color: ${props => props.theme.colors.primaryLight};
  color: ${props => props.theme.colors.primary};
  transition: 400ms;
  :hover{
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primaryLight};
  }
`;
export const InfoFooter = styled.div`
  display: ${props => props.open ? "block" : "none"};
  color: ${props => props.theme.colors.light};
  font-weight: 300;
  font-size: 12px;
  strong{
    margin:0;
    font-size: 14px;
    color: ${props => props.theme.colors.textColor};
  }
  p:first-of-type{
    margin: 0 0 0.75rem 0;
  }
  a{
   font-weight: 500;
   text-decoration: none;
   color:inherit;
  }
`;
export const Bar = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  height: 75px;
  padding: 1rem 1.5rem;
  margin-bottom: 2.75rem;
  background-color: white;
  box-shadow: ${props => props.theme.boxShadow.dirY};
  h1{
    display:inline;
    margin-left: 1rem;
  }
`;
