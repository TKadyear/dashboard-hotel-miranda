import { useLogin } from "../App/context-auth";
import { useLocation } from "react-router-dom";
import { Section, SideBar, Logo, Link, ContactCard, Title, Subtitle, BtnContact, InfoFooter, Bar } from "./NavBarStyleComponents";
import { IoClose, IoLogInOutline, IoMenuOutline } from "react-icons/io5";
import { useOpen, useToggleOpen } from "../App/context-open";
import { useDispatchLogin, ACTION_TYPES } from "../App/context-auth";
export const TopBar = (props) => {
  const open = useOpen();
  const toggleOpen = useToggleOpen();
  const reducer = useDispatchLogin();
  const handleLogOut = () => reducer({ type: ACTION_TYPES.LOG_OUT });
  return (
    <Bar open={open}>
      {open
        ? <IoClose size="1.5rem" style={{ cursor: "pointer" }} onClick={toggleOpen} />
        : <IoMenuOutline size="1.5rem" style={{ cursor: "pointer" }} onClick={toggleOpen} />
      }
      {props.children}
      <IoLogInOutline size="2rem" onClick={handleLogOut} />
    </Bar>
  );
};
export const NavBar = (props) => {
  const open = useOpen();
  const handleClick = useToggleOpen();
  const { auth, login } = useLogin();
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
          <Section key={route.name} open={open} onClick={handleClick} active={pathname === route.path}>
            {route.icon}
            <Link
              open={open}
              to={route.path}>{route.name}</Link>
          </Section >
        ))
        }
        <ContactCard open={open}>
          <p>
            <strong>{login.name}</strong><br />
            {login.email}
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
