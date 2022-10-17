import html from "html-literal";

export default state => html`
  <div class="topPicks"><h1>Our Top Picks</h1></div>
  <section id="Gateddogparks">
    <div class="gatedDogParkHeader"><h1>St. John's Community Dog Park</h1></div>
    <img
      class="singlePics"
      src="https://i.ibb.co/tsW35d0/St-Johns-Community-Dog-Park.jpg"
    />
    <div class="facts">More Information Here</div>

    <div class="gatedDogParkHeader"><h1>Southwest City Dog Park</h1></div>
    <img
      class="singlePics"
      src="https://i.ibb.co/vz6XB1Y/Southwest-City-Dog-Park.jpg"
    />
    <div class="facts">More Information Here</div>

    <div class="gatedDogParkHeader"><h1>Shaw Dog Park</h1></div>
    <img class="singlePics" src="https://i.ibb.co/7bQRw8G/Shaw-Dog-Park.jpg" />
    <div class="facts">More Information Here</div>
  </section>
  <div class="crime"><h1>Crime</h1></div>
`;
