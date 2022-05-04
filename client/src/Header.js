import styled from "styled-components";
import LogoutButton from "./LogoutButton";
import Signin from "./Signin";
import { useAuth0 } from "@auth0/auth0-react";
import friendsLogo from "./Images/FriendsLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user, isAuthenticated);
  return (
    <Wrapper>
      <Logo src={friendsLogo} alt="logo"></Logo>
      <ButtonWrapper>
        {isAuthenticated && (
          <ProfileButton to="/profile">Profile</ProfileButton>
        )}
        {isAuthenticated ? <LogoutButton /> : <Signin />}
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-image: url(${friendsLogo}); */
  /* background-repeat: no-repeat;
  background-position: center; */
  height: 65px;
  padding: 20px;
  margin: 10px;
`;

const Logo = styled.img`
  height: 65px;
  padding: 20px 20px 20px 0px;
  margin: 10px;
`;

const ProfileButton = styled(Link)`
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
  padding: 10px 0 10px 0;
  margin-right: 30px;
  border-radius: 10px;
  &:hover {
    background-color: black;
    color: white;
    transition-duration: 0.4s;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  max-width: 300px;
  float: right;
`;

export default Header;
