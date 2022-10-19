import html from "html-literal";

export default state => html`
  <header>

  <div class = "allWeather">

  <div class = "weatherLogo"><img src="https://i.ibb.co/q5LPDT7/weatherlogo.webp"></div>

<div class = "weatherInfo"><h3>
  The weather in ${state.weather.city} is ${state.weather.description}.
  Temperature is ${state.weather.temp}F, and it feels like
  ${state.weather.feelsLike}F.
</h3></div></div>

    <h1>
      <div class = "appName">
      <center>Pup STL</center>
    </h1></div>

    <div class = "logo"></div>
    <img src="https://i.ibb.co/Nthpwm1/logo-1.png">

<!--search bar below-->



<ul id="locationList"><div class = "search"><label for="search">Search:</label>
    <input
    type="text"
    name="search"
    id="search"
    placeholder="Search here" required />

    </div></ul>

    <div class = "title">
      <h1>A St. Louis Dog Owner Hub</h1>
      </div>

      <div class="stockPhotos">
      <div id="one"><img src="https://i.ibb.co/HC6QGjB/St-Louis-6.jpg" /></div>

      <div id="two"><img src="https://i.ibb.co/KXfX0H5/St-Louis-3.jpg" /></div>

      <div id="three">
        <img src="https://i.ibb.co/5k933Pg/St-Louis-7.jpg" />
      </div>

      <div id="four"><img src="https://i.ibb.co/Z2SP8nZ/St-Louis-2.jpg" /></div>

      <div id="five"><img src="https://i.ibb.co/7J2MvJn/St-Louis-1.jpg" /></div>

      <div id="six"><img src="https://i.ibb.co/P4nKrwX/St-Louis-8.jpg" /></div>
    </div>

    <div class="options">
      <div id="where"><h1>Where Would You Like To Go?</h1></div>
      <div class="publicParks">
        <button><h2>Public Parks</h2></button>
      </div>
      <div class="gatedDogParks">
        <button>
          <h2>Gated Dog Parks</h2>
        </button>
      </div>
      <div class="restaurantsBars">
        <button><h2>Restaurants/Bars</h2></button>
      </div>
      <div class="coffee">
        <button><h2>Coffee</h2></button>
      </div>
    </div>

  </header>
`;
