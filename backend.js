//This script runs the backend, to protect the API key

//defines usable variables, from packegas that where installed earlier
const PORT = 8000;
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.json("hi");
});

// here comes some request: continue the video https://www.youtube.com/watch?v=FcwfjMebjTU&t=855s
app.get("/news", (req, res) => {
  res.json("");
});

app.listen(8000, () => console.log(`Server is Running on port ${PORT}`));
