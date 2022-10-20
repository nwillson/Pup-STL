import html from "html-literal";

export default state => html`
  <section id="Coffee">
    <div class="introToPage">
      <h3>
        If you ask us, there's no two better things than coffee and dogs. Use
        the Pup-STL application to combine these two delicacies into one. <br />
        <br />
        Some locations may be patio friendly only. Always make sure to do your
        research before committing to a place!
      </h3>
    </div>
    <div class="topPicks"><h1>Our Top Picks</h1></div>
    <div class="coffeeSpots">
      <div class="locationHeader"><h1>Protagonist Cafe</h1></div>

      <div class="picBlock">
        <img src="https://i.ibb.co/ZmrRz5V/protagonistcafe1.jpg" />

        <img src="https://i.ibb.co/q9Tm3y9/protagonistcafe3.jpg" />

        <img src="https://i.ibb.co/nwdt3QD/protagonistcafe2.jpg" />
      </div>

      <div class="facts">
        <h2>More information on Protagonist Cafe</h2>

        Protagonist Cafe is placed in Historic Soulard that has been around
        since the 1770's. They have over 5000 books, make their own coffee and
        espresso, and offer a variety of treats. Link to their website
        <a href="https://www.protagonistcafe.com/">here.</a>
      </div>

      <div class="fiddleHeader"><h1>Fiddlehead Fern Cafe</h1></div>
      <div class="picBlock">
        <img src="https://i.ibb.co/H7ZPW06/fiddlehead1.jpg" />

        <img src="https://i.ibb.co/L12wWcW/fiddlehead2.jpg" />

        <img src="https://i.ibb.co/WP65sJV/fiddlehead3.jpg" />
      </div>

      <div class="facts">
        <h1>More Information on Fiddlehead Fern Cafe</h1>

        Owner Darcy Heine is a 4th generation resident of the Shaw
        Neighbhorhood. She has experience in photography and restaurant
        management. She brought her experience in these places together and
        opened up Fiddlehead Fern Cafe. They are dog friendly! Link to their
        website
        <a href="https://www.fiddleheadferncafe.com/">here.</a>
      </div>

      <div class="zoomieHeader"><h1>Zoomies Pet Cafe</h1></div>

      <div class="picBlock">
        <img src="https://i.ibb.co/v4vs02M/zoomies1.jpg" />

        <img src="https://i.ibb.co/17NFSpr/zoomies2.jpg" />

        <img src="https://i.ibb.co/S3vgPmX/zoomies3.jpg" />
      </div>

      <div class="facts">
        <h1>More Information on Zoomies Pet Cafe</h1>

        It's in the name! Zoomies Pet Cafe is located in Princeton Heights.
        Princeton Heights is one of the safest Neighborhoods in St. Louis with a
        Safety Rating of 9. This place is centered around your pups! Link
        <a href="https://www.zoomiespetcafe.com/">here</a>
      </div>
    </div>
    <div class="crime"><h1>Crime</h1></div>

    <div class = "tableList"><table style= "margin-left: auto; margin-right: auto;" >

</table>

</div>

<div class="dynamicTable">
    <table>
      <thead>
        <tr>
          <th>Location Name:</th>
          <th>Type of Establishment:</th>
          <th>Safety Rating:</th>
        </tr>
      </thead>
      <tbody id="data-output">
${state.locations.filter(function(location) {
  if (location.type == "Coffee") {
    return `<tr>
            <td>${location.name}</td>
            <td>${location.type}</td>
            <td>${location.safetyRating}</td>
         </tr>`;
  }
})};

        <!-- Prodcuts from javascript file in here. -->
      </tbody>
    </table>



  </div>
</div>

  </section>
`;
