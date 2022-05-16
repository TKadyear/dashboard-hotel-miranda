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


export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
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
    const login = { user: user, password: password };
    const isValid = validationUser(dataUsers, login);
    if (isValid) {
      const employee = findUser(dataUsers, login.user);
      setAuth(isValid, employee);
      return navigate("/", { replace: true });
    }
    setAuth(isValid);
  };
  return (
    <Container>
      <ContainerCard img="./img/LogoHotel.svg">
        <h1>Log in to your account</h1>
        <label>
          Email Address
        </label>
        <Input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
        <label>
          Password
        </label>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleSubmit}>Continue</Button>
      </ContainerCard>
    </Container>
  );
};
