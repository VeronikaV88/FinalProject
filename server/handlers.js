const axios = require("axios");

const getRandomQuote = async (req, res) => {
  const quote = await axios.get(
    "http://friends-quotes-api.herokuapp.com/quotes/random"
  );
  res.status(200).json({
    status: 200,
    data: quote,
  });
};

module.exports = { getRandomQuote };
