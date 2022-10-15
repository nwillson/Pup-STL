import html from "html-literal";

export default state => html`


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

    <div class="options">
      <div id="where"><h1>Where Would You Like To Go?</h1></div>
      <div class="publicParks">
        <button><h2>Public Parks</h2></button>
      </div>
      <div class="gatedDogParks">
        <button>
          <h2>Gated Dog Parks</h2>
        </button>
      </div>
      <div class="restaurantsBars">
        <button><h2>Restaurants/Bars</h2></button>
      </div>
      <div class="coffee">
        <button><h2>Coffee</h2></button>
      </div>
    </div>


  </section>


<div class = "collection"><h1>An Entire Collection of Pup-STL's Dog Friendly Location List</h1></div>

<div class = "tableList"><table style= "margin-left: auto; margin-right: auto;" >

</table>

</div>

<table>
      <thead>
      <tr>
    <th>Location Name:</th>
    <th>Type of Establishment:</th>
    <th>Safety Rating:</th>
  </tr>
      </thead>
      <tbody id="data-output">
         <!-- Prodcuts from javascript file in here. -->
      </tbody>
   </table>


  </div>

  <div class="crime"><h1>Crime</h1></div>
  <div class="crimeMap">
<a href ="https://www.neighborhoodscout.com/mo/st-louis/crime"><h2>A Visual St. Louis City Crime Map</h2></a>

<div class = "iframe"><iframe src ="https://federalcos.com/blog/st-louis-mo-crime-rate/" width= 800px; height=700px;></iframe></div>
`;
