const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: /^[A-Za-z .!@#$%^&*']*$/
  },
  type: {
    type: String
  },
  neighborhood: {
    type: String,
    validate: /^[A-Za-z .!@#$%^&*]*$/
  },
  safetyRating: {
    type: Number,
    validate: /^[0-9]*$/
  }
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
