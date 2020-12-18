const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const db = require("./config/config").get(process.env.NODE_ENV);
const Participant = require("./models/participant");
const Question = require("./models/Question");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cookieParser());

//database
mongoose.Promise = global.Promise;
mongoose
  .connect(db.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(
    () => {
      console.log("Database connected sucessfully ");
    },
    (error) => {
      console.log("Could not connected to database : " + error);
    }
  );

app.post("/create", (req, res, next) => {
  Question.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center'>Welcome to Exam World Please verify your Acoount</h1>"
  );
});
app.listen(3000, () => {
  console.log("Server is running on localhost:3000");
});
