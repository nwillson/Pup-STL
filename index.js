import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
      ${Header(state)}
      ${Nav(store.Links)}
      ${Main(state)}
      ${Footer()}
    `;

  afterRender(state);

  router.updatePageLinks();
}

function afterRender(state) {
  /*
  below are eventlisteners that work, but
  I would like an alternative to the alert box that makes you click "OK"


  document
    .querySelector(".publicParks")
    .addEventListener("mouseover", function() {
      alert("Take that Dog for a stroll!");
    });
  document
    .querySelector(".gatedDogParks")
    .addEventListener("mouseover", function() {
      alert("Let them have some fun!");
    });
  document
    .querySelector(".restaurantsBars")
    .addEventListener("mouseover", function() {
      alert("Does your dog get a drink, too?");
    });
  document.querySelector(".coffee").addEventListener("mouseover", function() {
    alert("Feed that addiction!");
  });
*/
  //below is a new set of event listeners intended to change the color of the buttons on the click
  //Public Parks works in an unintended way, but the rest do not work at all.

  const button = document.querySelector(
    ".publicParks",
    ".gatedDogParks",
    ".restaurantsBars",
    ".coffee"
  );

  button.addEventListener("click", function onClick() {
    button.style.backgroundColor = "salmon";
  });
}

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    // Add a switch case statement to handle multiple routes
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Home.weather = {};
            store.Home.weather.city = response.data.name;
            store.Home.weather.temp = kelvinToFahrenheit(
              response.data.main.temp
            );
            store.Home.weather.feelsLike = kelvinToFahrenheit(
              response.data.main.feels_like
            );
            store.Home.weather.description = response.data.weather[0].main;

            console.log(response.data);
            done();
          })
          .catch(err => console.log(err));
        break;
      default:
        done();
    }
  }
});

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
