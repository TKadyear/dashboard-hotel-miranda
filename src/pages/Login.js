import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, ContainerCard, Input } from "../components/base/style-component";
const Container = styled.div`
  width:max-content;
  margin: 0  auto;
  height: 100%;
  padding: 2.5rem;
`;

// TODO si estas login que te redirija a otra página.
export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };
  return (
    <Container>
      <ContainerCard image="grey">
        <h1>Log in to your account</h1>
        <label>
          Usuario
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
