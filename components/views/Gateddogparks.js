import html from "html-literal";

export default state => html`
  <div class="topPicks"><h1>Our Top Picks</h1></div>
  <section id="Gateddogparks">
    <div class="gatedDogParkHeader"><h1>Southwest City Dog Park</h1></div>
    <img
      class="singlePics"
      src="https://i.ibb.co/vz6XB1Y/Southwest-City-Dog-Park.jpg"
    />
    <div class="facts">
      <div class="factsText">
        <h2>More Information on Southwest City Dog Park:</h2>
        Southwest City Dog Park is great! It is very popular, so it is currently
        no longer accepting any applications, but a wait list is in order
        <a href="https://swcitydogpark.org/">here.</a>
      </div>
    </div>

    <div class="gatedDogParkHeader"><h1>Shaw Dog Park</h1></div>

    <img class="shawPics" src="https://i.ibb.co/7bQRw8G/Shaw-Dog-Park.jpg" />

    <img class="shawPics" src="https://i.ibb.co/pjY3Vdb/shawdogpark2.jpg" />

    <img class="shawPics1" src="https://i.ibb.co/hXT1S9K/shawdogpark4.png" />

    <img class="shawPics" src="https://i.ibb.co/gr6zTg6/shawdogpark3.jpg" />

    <img class="shawPics" src="https://i.ibb.co/bHGw43c/shawdogpark5.jpg" />

    <div class="facts">
      <div class="factsText">
        <h2>More Information on Shaw Dog Park:</h2>
        Shaw Dog Park is located in one of the few safe neighborhoods in the
        heart of the city. In a beautiful neighborhoods lies a beautiful Dog
        Park. More information can be found
        <a href="https://shawstlouis.org/attractions-amenities/shaw-dog-park/"
          >here.</a
        >
      </div>
    </div>

    <div class="gatedDogParkHeader"><h1>St. John's Community Dog Park</h1></div>
    <img
      class="stJohns"
      src="https://i.ibb.co/tsW35d0/St-Johns-Community-Dog-Park.jpg"
    />
    <div class="facts">
      <div class="factsText">
        <h2>More Information on St. Johns Community Dog Park</h2>
        St. John's Community Dog Park is located in Mehlville. It is a
        fully-fenced in spot, with benches for owners, waste bins, and
        restrictions on aggressive dogs.
        <a
          href="https://stjucc.org/wp-content/uploads/2018/09/St.-Johns-Community-Dog-Park-Rules-Of-Conduct1.pdf"
          >Codes of Conduct here</a
        >
      </div>
    </div>
  </section>
  <div class="crime"><h1>Crime</h1></div>
`;
