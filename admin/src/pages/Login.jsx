import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../features/apiCalls";

const Container = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

const Login = () => {
  const dispatch = useDispatch();

  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container
      style={{
        height: "calc(100vh - 10px)",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Input
        type="text"
        placeholder="Username"
        onChange={(e) => SetUsername(e.target.value)}
        style={{padding: "10px", marginBottom: "20px"}}
      />
      <Input
        type="password"
        placeholder="Password"
        onChange={(e) => SetPassword(e.target.value)}
        style={{padding: "10px", marginBottom: "20px"}}
      />
      <Button onClick={handleClick} style={{padding: "10px", width: "100px"}}>Sign In</Button>
    </Container>
  );
};

export default Login;
