import { useEffect, useState } from "react";
import PostedComment from "./PostedComment";

const Forum = () => {
  const [comments, setComments] = useState([]);
  const [reload, setReload] = useState(false);
  useEffect(() => {
    fetch("/api/getComments")
      .then((res) => res.json())
      .then((data) => {
        setComments(data.result);
      });
  }, [reload]);
  return (
    <>
      <PostedComment reload={reload} setReload={setReload} />
      <div>
        {comments.map((comment) => {
          return <p>{comment.comment}</p>;
        })}
      </div>
    </>
  );
};

export default Forum;
