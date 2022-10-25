import html from "html-literal";

export default state => html`





  </section>


<div class = "collection"><h1>An Entire Collection of Pup-STL's Dog Friendly Location List</h1></div>

<div class = "tableList"><table style= "margin-left: auto; margin-right: auto;" >

</table>

</div>

<div class = "homeSearch">
<form id="search">
  <input type="search" id="query" name="q" placeholder="Search...">
  <button>Search</button>
</form>
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
</div></div>


  <div class="topPicks"><h1>Crime</h1></div>
  <div class="crimeMap">
<a href ="https://www.neighborhoodscout.com/mo/st-louis/crime"><h2>A Visual St. Louis City Crime Map</h2></a>

<iframe src = "https://federalcos.com/blog/safest-neighborhoods-in-st-louis-mo/" width= 800px; height= 800px;></iframe>
`;
