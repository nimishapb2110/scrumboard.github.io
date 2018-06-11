const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const sbRoutes = require("./routes/sb-route");
const app = express();

mongoose
  .connect(
    "mongodb+srv://" +
    process.env.MONGO_ATLAS_USER + ":" +  
    process.env.MONGO_ATLAS_PW +
    "@cluster0-qqxsh.mongodb.net/scrum-board?retryWrites=true"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection to database failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/sbitems", sbRoutes);
module.exports = app;

