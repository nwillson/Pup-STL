import html from "html-literal";

export default state => html`
  <header>

  <div class = "allWeather">

  <div class = "weatherLogo"><img src="https://i.ibb.co/q5LPDT7/weatherlogo.webp"></div>

<div class = "weatherInfo"><h3>
  ${state.weather.city} - ${state.weather.description}.
  Temperature is ${state.weather.temp}F, and it feels like
  ${state.weather.feelsLike}F.
</h3></div></div>

    <h1>
      <div class = "appName">
      <center>Pup-STL</center>
    </h1></div>

    <div class = "logo"></div>
    <img src="https://i.ibb.co/Nthpwm1/logo-1.png">

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




  </header>
`;
