const mongoose = require("mongoose");
const participantSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Name: {
    type: String,
  },
  Email: {
    type: String,
  },
  Score: {
    type: Number,
  },
  TimeSpent: {
    type: Number,
  },
});

module.exports = mongoose.model("Participant", participantSchema);
