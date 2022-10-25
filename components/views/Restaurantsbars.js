import html from "html-literal";

export default state => html`
  <section id="Restaurantsbars">

  <div class="topPicks"><h1>St. Louis Dog-Friendly Restaurants and Bars</h1></div>

    <div class="introToPage">
      <h3>
        St. Louis is home to an extraordinarily dog-friendly community, and many
        welcoming Restaurants and Bars. <br />
        <br />
        Some of Pup-STL's locations are only <b>patio</b> friendly. Always make
        sure to call ahead or do your research before commiting to a place!
      </h3>
    </div>
    <div class="topPicks"><h1>Our Top Picks</h1></div>

    <div class="gatedDogParkHeader"><h1>The Boathouse at Forest Park</h1></div>

    <div class="blockHeader">
      <div class="picBlock">
        <img class="towerGrove" src="https://i.ibb.co/tP5ZfcP/boathouse2.jpg" />
        <img class="towerGrove" src="https://i.ibb.co/QcHPkcj/boathouse1.jpg" />
        <img class="towerGrove" src="https://i.ibb.co/yp7XFbK/boathouse-4.jpg" />
        <img class="towerGrove" src="https://i.ibb.co/fpwf1Kc/boathouse3.jpg" />
        <img class="towerGrove" src="https://i.ibb.co/t8tX1MC/boathouse2.jpg" />
      </div>
    </div>

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

    <div class="blockHeader">
      <div class="picBlockRockwell">
        <img class="rbPics" src="" />
        <img class="rbPics" src="https://i.ibb.co/FKB8110/rockwell1.jpg" />
        <img class="rbPics" src="https://i.ibb.co/Bnm3WT5/rockwell2.jpg" />

        <img class="rbPics" src="https://i.ibb.co/XbmVWJt/rockwell3.jpg" />
        <img class="rbPics" src="https://i.ibb.co/9T47vDM/rockwell4.jpg" />
        <img class="rbPics" src="https://i.ibb.co/5rZT4Bm/rockwell5.jpg" />
        <img class="rbPics" src="" />
      </div>
    </div>

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

    <div class="gatedDogParkHeader"><h1>Russel's on Macklind</h1></div>

    <div class="blockHeader">
      <div class="picBlock">

      <img class = "towerGrove" src="https://i.ibb.co/9qQ9fZg/russels2.jpg" />
        <img class = "towerGrove" src="https://i.ibb.co/bsvrTVM/russels5.jpg" />
        <img class = "towerGrove" src="https://i.ibb.co/0yV7mqB/russels3.jpg" />
        <img class = "towerGrove" src="https://i.ibb.co/m5ZhsYx/russels4.jpg" />
        <img class = "towerGrove" src="https://i.ibb.co/MnrzT0t/russels1.jpg" />
      </div>
    </div>

    <div class="facts">
      <div class="factsText">
        <h2>More Information on Russel's on Macklind</h2>
        This dog friendly location offers brunch, dinner, a bakery, and a full
        bar including local craft beers and wine. They are located in The
        Southampton. Exceptional food, and a Safety Rating of 8. They have
        coffee as well! This is why they are inlcuded in our Top Picks! More
        information
        <a href="https://macklind.russellscafe.com/">here.</a>
      </div>
    </div>
  </section>
  <div class="crime"><h1>All Restaurants</h1></div>
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
