import styled from "styled-components";
import LogoutButton from "./LogoutButton";
import Signin from "./Signin";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, isAuthenticated);
  return (
    <div>
      <Signin />
      <LogoutButton />
    </div>
  );
};

export default Header;
