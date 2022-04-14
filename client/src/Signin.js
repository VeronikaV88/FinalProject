import styled from "styled-components";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Signin = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Log In</Button>;
};

const Button = styled.button`
  margin-top: 10px;
  font-size: 15px;
  border: black 1px solid;
  color: black;
  background-color: white;
  width: 100px;
  padding: 10px;
  border-radius: 20px;
  &:hover {
    background-color: black;
    color: white;
    transition-duration: 0.4s;
  }
`;

export default Signin;
