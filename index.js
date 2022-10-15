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
      ${Footer()}
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

router.hooks({
  before: (done, params) => {
    const view =
      params && params.data && params.data.view
        ? capitalize(params.data.view)
        : "Home";

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&q=st%20louis`
      )
      .then(response => {
        const kelvinToFahrenheit = kelvinTemp =>
          Math.round((kelvinTemp - 273.15) * (9 / 5) + 32);

        store.Header.weather = {};
        store.Header.weather.city = response.data.name;
        store.Header.weather.temp = kelvinToFahrenheit(response.data.main.temp);
        store.Header.weather.feelsLike = kelvinToFahrenheit(
          response.data.main.feels_like
        );
        store.Header.weather.description = response.data.weather[0].main;

        console.log(response.data);
        done();
      })
      .catch(err => console.log(err));

    // Add a switch case statement to handle multiple routes
    /*switch (view) {
      case "Home":
        break;
      default:
        done();
    }
    */
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

//want to print out values of objects

//sets variables equal to querySelector that matches criteria

const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
//create array named users that is set to an empty value to change later
let users = [];

searchInput.addEventListener("input", e => {
  //convert parameter target value to lowercase before looping is done
  const value = e.target.value.toLowerCase();
  //loop through each user array item to see if it includes value established in previous line
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});
//placeholder data - NEEDS TO BE SWITCHED TO MY CREATED API
//ALSO NEEDS TO BE MOVED TO HEADER. RUNNING INTO ERRORS
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

//fetches API and returns it in JSON format
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function(response) {
    return response.json();
  })
  .then(function(users) {
    //placeholder variable is equal to query Selector of data-output
    let placeholder = document.querySelector("#data-output");
    //set variable to empty string to later be filled in by loop
    let out = "";

    //adds and reassigns "out" to new variable using user.name&email
    for (let user of users) {
      out += `
         <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
         </tr>
      `;
    }

    placeholder.innerHTML = out;
  });
