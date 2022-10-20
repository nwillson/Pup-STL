export default {
  header: "Coffee",
  view: "Coffee"
};

let coffeeLocations = location.filter(function(location) {
  return location.type == "Coffee";
});

console.log(coffeeLocations);

