const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

import { connectDB } from "./database";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.use(morgan("tiny"));

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
  console.log(`...server running on port ${PORT}`);
});

const main = () => {
  connectDB();
};

main();
