const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const activities = require("./routes/activityRoute");

// Create express app
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = process.env.MONGO_URI;
// Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MONGO CONNECTED"))
  .catch(err => console.log("ERROR", err));

const port = process.env.PORT || 5000;

app.use("/activities", activities);

// Routes Section

// Listen for app
app.listen(port, () => console.log(`Server is running on  ${port}`));
