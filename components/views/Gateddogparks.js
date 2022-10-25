import html from "html-literal";

export default state => html`

<div class="topPicks"><h1>St. Louis Gated Dog Parks</h1></div>

  <div class="introToPage">
    <h3>
      Many of our Gated Dog Parks are beautiful, welcoming, and fun. Some have
      certain restrictions, such as pet interviews, breed restrictions, or wait
      lists. <br />
      <br />
      Always make sure to do your research before committing to a place, and
      make sure you are ready to go for you and your pup to have a great time!
    </h3>
  </div>

  <div class="topPicks"><h1>Our Top Picks</h1></div>
  <section id="Gateddogparks">
    <div class="gatedDogParkHeader"><h1>Southwest City Dog Park</h1></div>

    <div class="blockHeader">
      <div class="picBlock">
        <img class = "towerGrove" src="https://i.ibb.co/RHCZ0v0/swdog1.jpg" />
        <img class = "towerGrove" src="https://i.ibb.co/Lg9J3TB/swdog2.jpg" />
        <img class = "towerGrove" src="https://i.ibb.co/4MLMCyk/swdog3.jpg" />
      </div>
    </div>

    <div class="facts">
      <div class="factsText">
        <h2>More Information on Southwest City Dog Park:</h2>
        Southwest City Dog Park is great! It is very popular, so it is currently
        no longer accepting any applications, but a wait list is in order
        <a href="https://swcitydogpark.org/">here.</a>
      </div>
    </div>

    <div class="gatedDogParkHeader"><h1>Shaw Dog Park</h1></div>
    <div class="blockHeader">
      <div class="picBlock">
        <img
          class="towerGrove"
          src="https://i.ibb.co/7bQRw8G/Shaw-Dog-Park.jpg"
        />

        <img class="towerGrove" src="https://i.ibb.co/pjY3Vdb/shawdogpark2.jpg" />

        <img
          class="towerGrove"
          src="https://i.ibb.co/hXT1S9K/shawdogpark4.png"
        />

        <img class="towerGrove" src="https://i.ibb.co/gr6zTg6/shawdogpark3.jpg" />

        <img class="towerGrove" src="https://i.ibb.co/bHGw43c/shawdogpark5.jpg" />
      </div>
    </div>

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

    <div class="gatedDogParkHeader">
      <h1>SLU Dog Park and Sculpture Garden</h1>
    </div>

    <div class="blockHeader">
      <div class="picBlock">
        <img class = "towerGrove" src="https://i.ibb.co/hXMPWsj/slu2.jpg" />
        <img class = "towerGrove" src="https://i.ibb.co/S0tvRSc/slu3.jpg" />
        <img class = "towerGrove" src="https://i.ibb.co/QHz2sXV/slu1.jpg" />
        <img class = "towerGrove" src="https://i.ibb.co/ZGpLdWD/slu4.jpg" />
        <img class = "towerGrove" src="https://i.ibb.co/ZxZPtk8/slu5.jpg" />
      </div>
    </div>

    <div class="facts">
      <div class="factsText">
        <h2>More Information on SLU Dog Park</h2>
        SLU Dog Park and Sculpture Garden is located near Saint Louis University
        on Grand. We picked this location because of the beautiful architecture
        and college-town-like scenery. It is surely an amazing spot. This is one
        of the only open-to-all dog parks in the city. More information
        <a
          href="https://onthegrid.city/st-louis/midtown-the-grove/slu-dog-park-sculpture-garden"
          >here</a
        >
      </div>
    </div>
  </section>
  <div class="crime"><h1>All Gated Dog Parks</h1></div>
  <div class = "tableList"><table style= "margin-left: auto; margin-right: auto;" >

</table>

</div>

<div class="dynamicTable">
    <table>
      <thead>
        <tr>
          <th>Location Name:</th>
          <th>Type of Establishment:</th>
          <th>Neighborhood</th>
          <th>Safety Rating:</th>
        </tr>
      </thead>
      <tbody id="data-output">
${state.locations.map(location => {
  return `<tr>
            <td>${location.name}</td>
            <td>${location.type}</td>
            <td>${location.neighborhood}</td>
            <td>${location.safetyRating}</td>
         </tr>`;
})}

      </tbody>
    </table>



  </div>
</div>
`;
