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


  </header>
`;
