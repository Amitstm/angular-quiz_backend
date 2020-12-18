const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Question = new Schema({
  QuestionID: {
    type: Number,
  },
  Question: {
    type: String,
  },
  option1: {
    type: String,
  },
  option2: {
    type: String,
  },
  option3: {
    type: String,
  },
  option4: {
    type: String,
  },
  Asnwer: {
    type: Number,
  },
});
module.exports = mongoose.model("Question", Question);
