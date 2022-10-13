const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: /^[A-Za-z .!@#$%^&*]*$/
  },
  type: {
    type: String
  },
  neighborhood: {
    type: String,
    validate: /^[A-Za-z ]*$/
  },
  safetyRating: {
    type: Number,
    validate: /^[0-9]*$/
  }
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;

console.log(Location);

/*const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema = ([
  {
    name: "Tower Grove Park",
    neighborhood: "Tower Grove",
    safetyRating: null
  },
  {
    name: "Forest Park",
    neighborhood: "Forest Park",
    safetyRating: null
  },
  {
    name: "Francis Park",
    neighborhood: "St. Louis Hills",
    safetyRating: null
  },
  {
    name: "Protagonist Cafe",
    neighborhood: "Soulard",
    safetyRating: null
  },
  {
    name: "FiddleHead Fern Cafe",
    neighborhood: "Shaw",
    safetyRating: null
  },
  {
    name: "Zoomies Pet Cafe",
    neighborhood: "Princeton Heights",
    safetyRating: null
  }
]);

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
*/
