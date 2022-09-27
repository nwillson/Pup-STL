import html from "html-literal";

export default links => html`
  <nav>
    <i class="fas fa-bars"></i>
    <ul class="hidden--mobile nav-links">
      ${links
        .map(
          link =>
            `<li><a href="/${link.title}" title="${link.title}" data-navigo>${link.text}</a></li>`
        )
        .join("")}
    </ul>
    <div class="options">
      <div id="where"><h1>Where Would You Like To Go?</h1></div>

      <div class="publicParks">
        <h2><center>Public Parks</center></h2>
      </div>
      <div class="gatedDogParks">
        <h2><center>Gated Dog Parks</center></h2>
      </div>
      <div class="restaurantsBars">
        <h2><center>Restaurants/Bars</center></h2>
      </div>
      <div class="coffee">
        <h2><center>Coffee</center></h2>
      </div>
    </div>
  </nav>
`;
