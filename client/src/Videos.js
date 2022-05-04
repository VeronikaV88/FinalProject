import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const Videos = () => {
  const categories = {
    Category1: "videoRef1",
    Category2: "videoRef2",
    Category3: "videoRef3",
  };

  return (
    <>
      {Object.keys(categories).map((cat) => {
        return (
          <div>
            <p>{cat}</p>
            <p>{categories[cat]}</p>
          </div>
        );
      })}
    </>
  );
};

export default Videos;
