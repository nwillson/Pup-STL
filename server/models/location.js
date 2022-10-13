const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  neighborhood: {
    type: String,
    required: true,
    enum: ["thin", "chicago", "deep-dish", "hella-thick"]
  },
  safetyRating: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;

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
