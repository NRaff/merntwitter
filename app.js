const mongoose = require('mongoose')
const express = require("express");
// const mongoose = require('mongoose');
// import mongoURI from "./config/keys";
const mongoURI = require("./config/keys")

mongoose
  .connect(mongoURI, {useNewUrlParser: true})
  .then(() => console.log("Connect to MongoDB successfully"))
  .catch(err => console.log(err))

const port = process.env.PORT || 5000;
const app = express()
app.get("/", (req, res) => res.send("Hello all the things"));
app.listen(port, () => console.log(`Server is running on port ${port}`));
