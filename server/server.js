const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const PORT = 8000;
const {
  getRandomQuote,
  getUser,
  getShowInfo,
  getQuestions,
  createUser,
  addComment,
  getComments,
} = require("./handlers");

express()
  .use(cors())
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("dev"))
  .use(express.static("./server/assets"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"));

const app = express();

app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());

app.get("/api/getRandomQuote", getRandomQuote);
app.get("/api/getUser/:email", getUser);
app.get("/api/getShowInfo", getShowInfo);
app.get("/api/getQuestions", getQuestions);
app.post("/api/addComment", addComment);
app.get("/api/getComments", getComments);
app.post("/api/createUser", createUser);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}...`));
