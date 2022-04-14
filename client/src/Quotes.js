import styled from "styled-components";
import { useState, useEffect } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState(null);

  const randomQuote = (ev) => {
    ev.preventDefault();
    fetch("/api/getRandomQuote")
      //   .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data.data);
      });
  };

  return <Button onClick={randomQuote}>Generate random quote</Button>;
};

const Button = styled.button``;

export default Quotes;
