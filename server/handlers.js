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
    const { email } = req.params;
    const user = await db.collection("Users").findOne({ email: email });
    console.log(user, email);
    if (user) {
      res.status(200).json({
        status: 200,
        data: user,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "User not found!",
      });
    }
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

const addComment = async (req, res) => {
  // payload: { user: "userName", comment: "string" }
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();
  const db = client.db("Friends");
  console.log("connected to db");

  let params = { ...req.body };

  if (!params.hasOwnProperty("user")) {
    params = {
      user: "Anonymous",
      comment: params.comment,
    };
  }
  console.log(params);
  try {
    const result = await db.collection("Comments").insertOne(params);
    res.status(201).json({
      status: 201,
      result: result,
      data: params,
    });
  } catch (err) {
    res.status(500).json({ status: 500, error: err });
  }

  client.close();
  console.log("disconnected from db");
};

const getComments = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Friends");
    console.log("connected to db");

    const comments = await db.collection("Comments").find().toArray();

    res.status(200).json({
      status: 200,
      result: comments,
    });
  } catch (err) {
    res.status(500).json({ status: 500, error: err });
  } finally {
    client.close();
    console.log("disconnected");
  }
};

// If user doesn't exist in database, it inserts the user's info.
const createUser = async (req, res) => {
  let client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Friends");
    console.log("connected!");
    const user = await db
      .collection("Users")
      .insertOne({ ...req.body, likes: [], faved: [] });
    res.status(201).json({
      status: 201,
      result: user,
      message: "user created!",
    });
  } catch (err) {
    res.status(500).json({ status: 500, error: err });
  } finally {
    client.close();
    console.log("disconnected!");
  }
};

module.exports = {
  getRandomQuote,
  getUser,
  getShowInfo,
  getQuestions,
  addComment,
  getComments,
  createUser,
};
