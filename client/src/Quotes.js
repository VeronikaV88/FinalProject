import styled from "styled-components";
import { useState, useEffect } from "react";
import ActionBar from "./ActionBar";

const Quotes = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const randomQuote = (ev) => {
    ev.preventDefault();
    fetch("/api/getRandomQuote")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(true);
        setQuote(data);
      });
  };

  return (
    <>
      <Instruction>Click the button below to start the generator!</Instruction>
      {quote && (
        <CardContainer>
          <Card>
            <>
              <QuoteWrapper>"{quote.quote}"</QuoteWrapper>
              <CharacterWrapper>- {quote.character}.</CharacterWrapper>
            </>
            <ActionBarWrapper>
              <ActionBar />
            </ActionBarWrapper>
          </Card>
        </CardContainer>
      )}
      <ButtonWrapper>
        <Button onClick={randomQuote}>Generate random quote</Button>
      </ButtonWrapper>
    </>
  );
};

const Instruction = styled.p`
  margin: 50px;
  font-family: Verdana, Tahoma, sans-serif;
  text-align: center;
  font-weight: bold;
`;
const CardContainer = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  box-shadow: rgba(100, 100, 121, 0.2) 0px 10px 10px 10px;
  border-radius: 10px;
  width: 700px;
  height: 300px;
`;

const ActionBarWrapper = styled.div`
  position: inherit;
  display: flex;
  justify-content: center;
  margin-top: 7%;
`;

const QuoteWrapper = styled.div`
  padding: 30px;
  font-family: "Playfair Display", serif;
  font-size: 25px;
  max-height: 50px;
`;

const CharacterWrapper = styled.div`
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 20px;
  padding-top: 50px;
`;

const ButtonWrapper = styled.div`
  position: inherit;
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  padding: 10px;
  width: 250px;
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid;
  &:hover {
    background-color: #00bfff;
    color: white;
    transition-duration: 0.4s;
    border: 1px solid black;
  }
`;

export default Quotes;
