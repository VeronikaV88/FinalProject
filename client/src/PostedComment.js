import { useEffect } from "react";

const PostedComment = () => {
  const handleClick = async () => {
    await fetch("/api/addComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ comment: "hello" }),
    }).then((res) => res.json());
  };
  return <button onClick={handleClick}>Submit</button>;
};

export default PostedComment;
