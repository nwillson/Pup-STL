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

console.log(Location);

const pizzaSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  crust: {
    type: String,
    required: true,
    enum: ["thin", "chicago", "deep-dish", "hella-thick"]
  },
  cheese: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  sauce: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  toppings: [String]
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

module.exports = Pizza;
