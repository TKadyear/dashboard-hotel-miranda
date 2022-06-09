import styled from "styled-components";
import { Button, ContainerCard, Input } from "../components/style-component";
import { useState } from "react";
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
  const [requiredUser, setRequiredUser] = useState(false);
  const [requiredPassword, setRequiredPassword] = useState(false);
  const [invalid, setInvalid] = useState(false);
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
      <ContainerCard img="/img/LogoHotel.svg">
        <h1>Log in to your account</h1>
        {errorMessage()}
        <label htmlFor="user-input">
          Email Address
        </label>
        <Input id="user-input" data-cy="user-input" type="text" value={user} onChange={(e) => setUser(e.target.value)} required placeholder="guest@hotelmiranda.com" />
        <label htmlFor="password-input">
          Password
        </label>
        <Input id="password-input" data-cy="password-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="guest" />
        <Button data-cy="submit" onClick={handleSubmit}>Continue</Button>
      </ContainerCard>
    </Container>
  );
};
