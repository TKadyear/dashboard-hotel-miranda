import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, ContainerCard, Input } from "../components/base/style-component";
import { useAuth, useAuthUpdate } from "../App/context-auth";

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
  const auth = useAuth();
  const setAuth = useAuthUpdate();
  const navigate = useNavigate();
  if (auth) {
    navigate("/", { replace: true });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user === "1" && password == "12") {
      setAuth(true);
      navigate("/", { replace: true });
    }
  };
  return (
    <Container>
      <ContainerCard image="grey">
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
