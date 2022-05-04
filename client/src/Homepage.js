import styled from "styled-components";
import ShowInfo from "./ShowInfo";
import { useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContext";

const Homepage = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  return <div>Hello </div>;
};

export default Homepage;
