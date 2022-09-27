import html from "html-literal";

export default () => html`
  <header>
    <h1>
      <div class = "appName">
      <center>Pup STL</center>
    </h1></div>
    <img src="https://i.ibb.co/Nthpwm1/logo-1.png">

    <div class = "search"><label for="search">Search:</label>
    <input type="text" name="search" id="search" placeholder="Search here" required />
    </div>

    <div class = "title">
      <h1>A St. Louis Dog Owner Hub</h1>
      </div>

  </header>
`;
