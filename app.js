const mongoose = require('mongoose')
const express = require("express");
const Keys = require("./config/keys")
const users = require("./routes/api/users")
const tweets = require("./routes/api/tweets")
const bodyParser = require('body-parser')
const passport = require('passport')

mongoose
  .connect(Keys.mongoURI, {useNewUrlParser: true})
  .then(() => console.log("Connect to MongoDB successfully"))
  .catch(err => console.log(err))

const port = process.env.PORT || 5000;
const app = express()
app.use(passport.initialize())
require('./config/passport')(passport)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api/users", users)
app.use("/api/tweets", tweets)
app.get("/", (req, res) => res.send("Hello all the things"));
app.listen(port, () => console.log(`Server is running on port ${port}`));

