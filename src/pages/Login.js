import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, ContainerCard, Input } from "../components/style-component";
import { useAuth, useAuthUpdate } from "../App/context-auth";
import { allUsers } from "../features/users/usersSlice";
import { findUser, validationUser } from "../services/validation-db";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Container = styled.div`
  width:max-content;
  margin: 0  auto;
  height: 100%;
  padding: 2.5rem;
`;
const Error = styled.p`
  color: ${props => props.theme.colors.secondaryRed};
  font-weight:bold;
`;

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [requiredUser, setRequiredUser] = useState(false);//Initialize in false because the first view of the page is not
  const [requiredPassword, setRequiredPassword] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const auth = useAuth();
  const setAuth = useAuthUpdate();
  const navigate = useNavigate();
  const dataUsers = useSelector(allUsers);
  useEffect(() => {
    if (auth) {
      navigate("/", { replace: true });
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "") {
      return setRequiredUser(true);
    }
    setRequiredUser(false);
    if (password === "") {
      return setRequiredPassword(true);
    }
    setRequiredPassword(false);
    const login = { user: user, password: password };
    const isValid = validationUser(dataUsers, login);
    setInvalid(!isValid);
    if (isValid) {
      const employee = findUser(dataUsers, login.user);
      const authEmployee = { name: employee.personal_info.firstName + " " + employee.personal_info.surname, email: employee.personal_info.email };
      setAuth(isValid, authEmployee);
      return navigate("/", { replace: true });
    }
    setAuth(isValid);
  };
  const errorMessage = () => {
    if (requiredUser && requiredPassword) {
      return <Error data-cy="error-message">User and password can not be blank</Error>;
    }
    if (requiredUser) {
      return <Error data-cy="error-message">User can not be blank</Error>;
    }
    if (requiredPassword) {
      return <Error data-cy="error-message">Password can not be blank</Error>;
    }
    if (invalid) {
      return <Error data-cy="error-message">User or password invalid</Error>;
    }
  };
  return (
    <Container>
      <ContainerCard img="./img/LogoHotel.svg">
        <h1>Log in to your account</h1>
        {errorMessage()}
        <label htmlFor="user-input">
          Email Address
        </label>
        <Input id="user-input" data-cy="user-input" type="text" value={user} onChange={(e) => setUser(e.target.value)} required />
        <label htmlFor="password-input">
          Password
        </label>
        <Input id="password-input" data-cy="password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button data-cy="submit" onClick={handleSubmit}>Continue</Button>
      </ContainerCard>
    </Container>
  );
};
