const { Router } = require("express");
const Location = require("../models/location");
const router = Router();

router.post("/", (request, response) => {
  const newPizza = new Location(request.body);
  newPizza.save((error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

router.get("/", (request, response) => {
  Location.find({}, (error, record) => {
    if (error) return response.status(500).json(error);
    return response.json(record);
  });
});

module.exports = router;
