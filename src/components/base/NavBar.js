import { useAuth, useEmployee } from "../../App/context-auth";
import { useLocation } from "react-router-dom";
import { Section, SideBar, Logo, Link, ContactCard, Title, Subtitle, BtnContact, InfoFooter } from "./NavBarStyleComponents";

export const NavBar = (props) => {
  const auth = useAuth();
  const employee = useEmployee();
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
      {auth && <ContactCard open={props.open}>
        <p>
          <strong>{`${employee.personal_info.firstName} ${employee.personal_info.surname}`}</strong><br />
          {employee.personal_info.email}
        </p>
        <BtnContact>Contact Us</BtnContact>
      </ContactCard>}
      <InfoFooter open={props.open}>
        <strong>Travl Hotel Admin Dashboard</strong>
        <p>© 2022 All Rights Reserved</p>
        <p>Made with ❤ by <a href="https://www.linkedin.com/in/tamara-kadyear-saber/">Tamara Kadyear</a></p>
      </InfoFooter>
    </SideBar >
  );
};
