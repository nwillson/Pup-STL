import { Header, Nav, Main, Footer } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { capitalize } from "lodash";

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

router
  .on({
    "/": () => render(),
    ":view": params => {
      let view = capitalize(params.data.view);
      render(store[view]);
    }
  })
  .resolve();
