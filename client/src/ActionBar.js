import styled from "styled-components";
import { BsSuitHeartFill } from "react-icons/bs";
import { BsHandThumbsUpFill } from "react-icons/bs";
import { useState } from "react";

const ActionBar = () => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  {
    /* BsSuitHeartFill = add to favourites */
  }
  {
    /* BsHandThumbsUpFill = like */
  }

  return (
    <Wrapper>
      <FavouriteButton
        type="button"
        onClick={(ev) => {
          console.log(isFavourite);
          ev.stopPropagation();
          setIsFavourite(!isFavourite);
        }}
      >
        {isFavourite ? (
          <FavouritesIcon size="15px" style={{ fill: "red" }} />
        ) : (
          <FavouritesIcon size="15px" style={{ fill: "black" }} />
        )}
        Add to favourites
      </FavouriteButton>
      <LikeButton
        type="button"
        onClick={(ev) => {
          console.log(isLiked);
          ev.stopPropagation();
          setIsLiked(!isLiked);
        }}
      >
        {isLiked ? (
          <LikeIcon size="15px" style={{ fill: "red" }} />
        ) : (
          <LikeIcon size="15px" style={{ fill: "black" }} />
        )}
        Like
      </LikeButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
`;

const FavouriteButton = styled.button`
  font-size: 15px;
  font-family: Verdana, Tahoma, sans-serif;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: black;
    color: white;
    transition-duration: 0.4s;
    border: 1px solid black;
  }
`;
const FavouritesIcon = styled(BsSuitHeartFill)`
  padding-right: 10px;
`;
const LikeButton = styled.button`
  font-size: 15px;
  font-family: Verdana, Tahoma, sans-serif;
  padding: 5px 10px 5px 10px;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: black;
    color: white;
    transition-duration: 0.4s;
    border: 1px solid black;
  }
`;
const LikeIcon = styled(BsHandThumbsUpFill)`
  padding-right: 10px;
`;

export default ActionBar;
