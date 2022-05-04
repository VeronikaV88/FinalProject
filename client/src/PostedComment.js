import { useEffect, useState } from "react";
import styled from "styled-components";

const PostedComment = ({ reload, setReload }) => {
  const [commentText, setCommentText] = useState("");

  const handleClick = async () => {
    console.log(commentText);
    await fetch("/api/addComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ comment: commentText }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCommentText("");
        setReload(!reload);
      });
  };
  return (
    <PostedCommentWrapper>
      <CommentText
        type="text"
        id="tweetText"
        value={commentText}
        onChange={(ev) => {
          setCommentText(ev.target.value);
        }}
      ></CommentText>
      <CommentSubmit
        onClick={() => {
          handleClick();
        }}
      >
        Submit
      </CommentSubmit>
    </PostedCommentWrapper>
  );
};

const CommentText = styled.input``;
const CommentSubmit = styled.button``;
const PostedCommentWrapper = styled.div``;

export default PostedComment;
