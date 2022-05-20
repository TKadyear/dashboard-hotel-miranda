import { useAuth, useEmployee } from "../App/context-auth";
import { useLocation } from "react-router-dom";
import { Section, SideBar, Logo, Link, ContactCard, Title, Subtitle, BtnContact, InfoFooter } from "./NavBarStyleComponents";
import { useContext } from "react";
import { MenuOpenContext } from "../App";

export const NavBar = (props) => {
  const open = useContext(MenuOpenContext);
  const auth = useAuth();
  const employee = useEmployee();
  const handleClick = () => props.setOpen(prev => !prev);
  const { pathname } = useLocation();
  if (auth) {
    return (
      <SideBar open={open} >
        <Logo pL="1rem" onClick={handleClick}>
          <img src="./img/LogoHotel.svg" alt="logo hotel" />
          <Title open={open}>travl</Title>
          <Subtitle open={open} >Hotel Admin Dashboard</Subtitle>
        </Logo>
        {props.links.map(route => (
          <Section key={route.name} onClick={handleClick} active={pathname === route.path}>
            {route.icon}
            <Link
              open={open}
              to={route.path}>{route.name}</Link>
          </Section >
        ))
        }
        <ContactCard open={open}>
          <p>
            <strong>{`${employee.personal_info.firstName} ${employee.personal_info.surname}`}</strong><br />
            {employee.personal_info.email}
          </p>
          <BtnContact>Edit Profile</BtnContact>
        </ContactCard>
        <InfoFooter open={open}>
          <strong>Travl Hotel Admin Dashboard</strong>
          <p>© 2022 All Rights Reserved</p>
          <p>Made with ❤ by <a href="https://www.linkedin.com/in/tamara-kadyear-saber/">Tamara Kadyear</a></p>
        </InfoFooter>
      </SideBar >
    );
  }
};
