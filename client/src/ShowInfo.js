import styled from "styled-components";
import { useState, useEffect } from "react";
const ShowInfo = () => {
  const [showInfo, setShowInfo] = useState(null);

  useEffect(() => {
    fetch("/api/getShowInfo")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowInfo(data);
      });
  }, []);

  return (
    <MainWrapper>
      {showInfo &&
        showInfo.created_by.map((creator) => (
          <div>
            <p>{creator.name}</p>
            <Img
              src={`https://image.tmdb.org/t/p/original${creator.profile_path}`}
              alt="creator"
            />
          </div>
        ))}
    </MainWrapper>
  );
};

const MainWrapper = styled.div``;

const Img = styled.img`
  max-width: 50px;
`;
export default ShowInfo;
