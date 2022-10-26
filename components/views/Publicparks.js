import html from "html-literal";

export default state => html`
  <section id="Publicparks">

  <div class="topPicks"><h1>St. Louis Public Parks</h1></div>

  <h3> <div class = "introToPage">St. Louis has 108 parks covering over 2900 acres of land. Pup-STL does not have a Safety Rating for every park,
but we have a complete list of St. Louis Parks <a href ="https://www.stlouis-mo.gov/parks/parks/browse-parks/#:~:text=With%20108%20parks%20covering%202956.35,park%20that%20meets%20your%20needs.">here. </a>


<br><br>Among our favorites are Forest Park, Tower Grove Park, Francis Park, Wilmore Park, Tilles Park,
Sublette Park, Lafayette Park, Clifton Heights Park,
and so many others. Only 3 of these made the cut of being Our Top Picks.</div></h3>






<div class="topPicks"><h1>Our Top Picks</h1></div>

<div class = "gatedDogParkHeader"><h1>Forest Park</h1></div>

<div class = "blockHeader"><div class ="picBlock">
<img class = "towerGrove" src="https://i.ibb.co/ZhQQXyn/Forest-Park-1.jpg" />
<img class = "towerGrove" src="https://i.ibb.co/tDtCKp8/Forest-Park-2.jpg" />
<img class = "towerGrove" src="https://i.ibb.co/Y3nVJdK/Forest-Park-3.jpg" />
<img class = "towerGrove" src="https://i.ibb.co/37XMhY3/Forest-Park-4.jpg" />
<img class = "towerGrove" src="https://i.ibb.co/3cbjZHQ/Forest-Park-5.jpg" /></div></div>





<div class ="facts">
  <h2>Some Notable Forest Park Facts for Dog Owners:</h2>
  <li>Over 1,300 acres of walkable land</li>
  <li>Over 30 miles of total walking paths</li>
  <li>Forest Park is within city limits, and is still bigger than Central Park in New York.</li>
  <li>More Information can be found <a href = "https://www.forestparkforever.org/visit">here.</a></li>
</div>


<div class = "gatedDogParkHeader"><h1>Tower Grove Park</h1></div>

<div class = "blockHeader"><div class ="picBlock">
  <img class="towerGrove" src="https://i.ibb.co/n8D4y9V/Tower-Grove-1.jpg" />
<img class="towerGrove" src="https://i.ibb.co/Btg7KjG/Tower-Grove-2.jpg" />
<img class="towerGrove" src="https://i.ibb.co/dk5Z0Pg/Tower-Grove-3.jpg" />
<img class="towerGrove" src="https://i.ibb.co/5BrqFH0/Tower-Grove-4.jpg" />
<img class="towerGrove" src="https://i.ibb.co/VtdZTyz/Tower-Grove-5.jpg" /></div></div>




<div class = "facts"><h1>More Information on Tower Grove</h1>
<li>Tower Grove Park features 32 of mostly Victorian Era design.</li> <br>
 <li>It has a lily pond, over 400 species of plants, and is a well known bird-watching (or squirrel watching) spot for you and your pup.</li>
 <br>
 <li>More pictures and information can be found <a href = "https://www.towergrovepark.org/">here.</a></div></li>

<div class = "gatedDogParkHeader"><h1>Francis Park</h1></div>


<div class = "blockHeader"><div class ="picBlock">
  <img class="towerGrove" src="https://i.ibb.co/Q6h99gc/francis1.jpg" />
<img class="towerGrove" src="https://i.ibb.co/5WhJrfx/francis2.jpg" />
<img class="towerGrove" src="https://i.ibb.co/LzTK34D/francis3.jpg" />
<img class="towerGrove" src="https://i.ibb.co/09gHZQp/francis4.jpg" />
<img class="towerGrove" src="https://i.ibb.co/PWRrLq1/francis5.jpg" /></div></div>



</section></div>

<div class = "facts"><center><h2>More Information on Francis Park</h2></center>
This park holds: <br>
<li>A Brewery (dog friendly, listed on our Restaurants/Bars page)</li>
<li>Tennis Courts</li>
<li>Multiple Fields</li>
<li>Pathways</li>
<li>60 Acres of Land</li>

More information can be found
<a href = "https://www.stlouis-mo.gov/parks/parks/browse-parks/view-park.cfm?parkID=3&parkName=Francis+Park">here.</a>
</div>

  <div class="topPicks"><h1>All Public Parks</h1></div>
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
