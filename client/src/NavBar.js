import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiHomeHeart } from "react-icons/bi";

const NavBar = () => {
  return (
    <>
      <NavWrapper>
        <NavLink to="/">
          <BiHomeHeart /> Home
        </NavLink>
        <NavLink to="/Quotes">Quote Generator</NavLink>
        <NavLink to="/Videos">Best Moments</NavLink>
        <NavLink to="/quiz">The Ultimate Quiz</NavLink>
        <NavLink to="/episodeguide">Episodes</NavLink>
        <NavLink to="/characters">Characters</NavLink>
        <NavLink to="/forum">Forum</NavLink>
      </NavWrapper>
    </>
  );
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: whitesmoke;
`;
const NavLink = styled(Link)`
  text-decoration: none;
  padding: 5px;
  font-size: 15px;
  font-family: Verdana, Tahoma, sans-serif;
  color: black;
  &:hover {
    background-color: #00bfff;
    color: white;
    transition-duration: 0.4s;
  }
`;

export default NavBar;
