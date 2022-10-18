import html from "html-literal";

export default () => html`
  <section id="Restaurantsbars">
    <div class="topPicks"><h1>Our Top Picks</h1></div>
    <h1>Put this header below "Our Top Picks"</h1>

    <div class="gatedDogParkHeader"><h1>The Boathouse at Forest Park</h1></div>
    <div class="facts">
      <div class="factsText">
        <h2>More Information on The Boathouse</h2>
        Forest Park is one of (depending on what you like) the best, and well
        known spots in St. Louis. It also showboats its own boathouse
        restaurant! They are pup-friendly, as well as the park that surrounds
        it. More information can be found
        <a href="https://boathousestl.com/">here.</a>
      </div>
    </div>

    <div class="gatedDogParkHeader"><h1>Rockwell Beer Garden</h1></div>
    <div class="facts">
      <div class="factsText">
        <h2>More Information on Rockwell Beer Garden</h2>
        Rockwell Beer Garden is located in Southwest St. Louis, in the "St.
        Louis Hills". It is in an extremely safe neighborhood, and in the heart
        of an extraordinary park. Rockwell Beer Garden serves their own beer,
        pizza, mixed drinks, coffee, and more. More information can be found
        <a href="https://rockwellbeer.com/francis-park/">here.</a>
      </div>
    </div>

    <div class="gatedDogParkHeader"><h1>Failoni's Restaurant and Bar</h1></div>
    <div class="facts">
      <div class="factsText">
        <h2>More Information on Failoni's Here</h2>
        Failoni's welcomes dogs on Tuesdays and Wednesdays and it is a treat to
        have them! More information can be found
        <a href="https://www.failonisrestaurantbar.com/">here.</a>
      </div>
    </div>
  </section>
  <div class="crime"><h1>Crime</h1></div>
`;
