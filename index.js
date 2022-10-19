import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";
import axios from "axios";
import dotenv from "dotenv";

const router = new Navigo("/");

function render(state = store.Home) {
  document.querySelector("#root").innerHTML = `
      ${Header(store.Header)}
      ${Nav(store.Links)}
      ${Main(state)}
      ${Footer(store.Home)}
    `;

  afterRender(state);

  router.updatePageLinks();
}

function afterRender(state) {
  /*
  below are eventlisteners that work, but
  I would like an alternative to the alert box that does not make you click "OK"


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

//SEARCH BAR IMPLEMENTATION BELOW

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";
    switch (view) {
      case "Home":
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
          )
          .then(response => {
            const kelvinToFahrenheit = kelvinTemp =>
              Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

            store.Header.weather = {};
            store.Header.weather.city = response.data.name;
            store.Header.weather.temp = kelvinToFahrenheit(
              response.data.main.temp
            );
            store.Header.weather.feelsLike = kelvinToFahrenheit(
              response.data.main.feels_like
            );
            store.Header.weather.description = response.data.weather[0].main;

            console.log(response.data);
            done();
          })
          .catch(err => console.log(err));

        // Add a switch case statement to handle multiple routes

        //add axios call HERE

        axios
          .get(`https://pup-stl.herokuapp.com/locations`)

          .then(response => {
            store.Home.locations = response.data;
            console.log(store.Home.locations);
            /*
            const userCardTemplate = document.querySelector(
              "[data-user-template]"
            );
            const userCardContainer = document.querySelector(
              "[data-user-cards-container]"
            );
            const searchInput = document.querySelector("[data-search]");

            let users = [];

            searchInput.addEventListener("input", e => {
              const value = e.target.value.toLowerCase();
              users.forEach(user => {
                const isVisible =
                  user.name.toLowerCase().includes(value) ||
                  user.email.toLowerCase().includes(value);
                user.element.classList.toggle("hide", !isVisible);
              });
            });

            response.data.map(user => {
              const card = userCardTemplate.content.cloneNode(true).children[0];
              const header = card.querySelector("[data-header]");
              const body = card.querySelector("[data-body]");
              header.textContent = user.name;
              body.textContent = "Safety Rating: " + user.safetyRating;
              userCardContainer.append(card);
              return {
                name: user.name,
                safetyRating: user.safetyRating,
                element: card
              };
            });
            */
            done();
          });

        // eslint-disable-next-line prettier/prettier
        axios.get(`https://pup-stl.herokuapp.com/locations`)
        .then(response => {

          function loopTable(users) {
            //placeholder variable is equal to query Selector of data-output
            let placeholder = document.querySelector("#data-output");
            //set variable to empty string to later be filled in by loop
            let out = "";

            //adds and reassigns "out" to new variable using user.name&email

            for (let user of users.data) {
              out += `
         <tr>
            <td>${user.name}</td>
            <td>${user.type}</td>
            <td>${user.safetyRating}</td>
         </tr>
      `;
            }
            placeholder.innerHTML = out;
          }

          loopTable(response);
        });
        done();

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
/*
const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

let users = [];

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      userCardContainer.append(card);
      return { name: user.name, email: user.email, element: card };
    });
  });
  */
