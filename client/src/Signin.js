import styled from "styled-components";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Signin = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

const Button = styled.button`
  font-weight: bold;
  font-family: Verdana, Tahoma, sans-serif;
  text-decoration: none;
  text-align: center;
  margin-top: 10px;
  font-size: 13px;
  border: black 1px solid;
  color: black;
  background-color: white;
  width: 100px;
  padding: 10px;
  border-radius: 10px;
  &:hover {
    background-color: black;
    color: white;
    transition-duration: 0.4s;
  }
`;

export default Signin;
