import styled from "styled-components";
import LogoutButton from "./LogoutButton";
import Signin from "./Signin";
import { useAuth0 } from "@auth0/auth0-react";
import friendsLogo from "./FriendsLogo.png";

const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, isAuthenticated);
  return (
    <Wrapper>
      <ButtonWrapper>
        {isAuthenticated ? <LogoutButton /> : <Signin />}
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url(${friendsLogo});
  background-repeat: no-repeat;
  background-position: center;
  height: 65px;
  padding: 20px;
  margin: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  max-width: 300px;
  float: right;
`;

export default Header;
