"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config({ path: "../.env" });
const { MONGO_URI } = process.env;
const { shuffleArray } = require("./Common");
const { questions } = require("./Data/Quiz-questions");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const axios = require("axios");

// gets random quote for Quotes.js component
const getRandomQuote = async (req, res) => {
  const quote = await axios.get(
    "http://friends-quotes-api.herokuapp.com/quotes/random"
  );
  res.json(quote.data);
};

// gets show info
const getShowInfo = async (req, res) => {
  const info = await axios.get(
    "https://api.themoviedb.org/3/tv/1668?api_key=6494740f3ddaa1c2fa9cd4a5d0228bfe&language=en-US"
  );
  res.json(info.data);
};

// Checks if user exists
const getUser = async (req, res) => {
  let client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Friends");
    let { email } = req.params;
    let user = await db.collection("Users").findOne({ email: email });
    console.log(user, email);
    res.status(200).json({
      status: 200,
      data: user,
    });
  } catch (err) {
    console.log(err.stack);
    res.status(404).json({
      status: 404,
      message: "User not found!",
    });
  } finally {
    client.close();
    console.log("disconnected");
  }
};

const getQuestions = async (req, res) => {
  res.status(200).json({
    status: 200,
    data: shuffleArray(questions),
  });
};

// Posts a comment to the database
const addComment = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Friends");
  console.log("connected to db");

  const comment = { ...req.body };

  try {
    console.log(comment);
    const result = await db.collection("Comments").insertOne(comment);
    res.status(201).json({ status: 201, result: result });
  } catch (err) {
    res.status(500).json({ status: 500, error: err });
  }

  client.close();
  console.log("disconnected from db");
};

// If user doesn't exist in database, it inserts the user's info.
// const createUser = async (req, res) => {
//   let client = new MongoClient(MONGO_URI, options);
//   try {}
// }

module.exports = {
  getRandomQuote,
  getUser,
  getShowInfo,
  addComment,
  // postComment,
  getQuestions,
};
