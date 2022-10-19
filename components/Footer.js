import html from "html-literal";

export default state => html`
  <footer>
    <div class="explanation">
      <h3>
        Pup-STL Allows You to Discover Dog-Friendly Locations in St. Louis City,
        Ranked by Average Review Rating, Safety, and Location
      </h3>
    </div>
  </footer>

  <div class="search-wrapper">
    <label for="search"><h1>Search Locations</h1></label>
    <div class="searchBox"><input type="search" id="search" data-search /></div>
  </div>
  <div class="user-cards" data-user-cards-container>
    ${state.locations
      .map(location => {
        return `<div class="card">
    <div class="header" data-header>${location.name}</div>
    <div class="body" data-body>${location.safetyRating}</div>
  </div>
`;
      })
      .join("")}
  </div>
`;
