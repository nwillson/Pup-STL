import html from "html-literal";

export default () => html`
  <section id="Publicparks">
    <h1>Placeholder Information for Public Parks</h1>
    <h1>Put this header below Crime Section</h1>


    <div class ="topPicksInfo"><h1>All information below goes to "Our Top Picks"</h1>

<div class = "forestParkHeader"><h1>Forest Park</h1></div>

<img class="forestPark" src="https://i.ibb.co/ZhQQXyn/Forest-Park-1.jpg" />
<img class="forestPark" src="https://i.ibb.co/tDtCKp8/Forest-Park-2.jpg" />
<img class="forestPark" src="https://i.ibb.co/Y3nVJdK/Forest-Park-3.jpg" />
<img class="forestPark" src="https://i.ibb.co/37XMhY3/Forest-Park-4.jpg" />
<img class="forestPark" src="https://i.ibb.co/3cbjZHQ/Forest-Park-5.jpg" />

<div class ="facts">
  <h2>Some Notable Forest Park Facts for Dog Owners:</h2>
  <li>Over 1,300 acres of walkable land</li>
  <li>Over 30 miles of total walking paths</li>
  <li>Forest Park is within city limits, and is still bigger than Central Park in New York</li>
</div>


<div class = "towerGroveHeader"><h1>Tower Grove Park</h1></div>
<img class="towerGrove" src="https://i.ibb.co/n8D4y9V/Tower-Grove-1.jpg" />
<img class="towerGrove" src="https://i.ibb.co/Btg7KjG/Tower-Grove-2.jpg" />
<img class="towerGrove" src="https://i.ibb.co/dk5Z0Pg/Tower-Grove-3.jpg" />
<img class="towerGrove" src="https://i.ibb.co/5BrqFH0/Tower-Grove-4.jpg" />
<img class="towerGrove" src="https://i.ibb.co/VtdZTyz/Tower-Grove-5.jpg" />

<div class = "towerGroveBody"><h1>More Information on Tower Grove</h1></div>

<div class = "francisParkHeader"><h1>Francis Park</h1></div>
<img class="francisPark" src="https://i.ibb.co/gJq6L2J/Francis-Park-1.jpg" />
<img class="francisPark" src="https://i.ibb.co/M1C2WFk/Francis-Park-2.jpg" />
<img class="francisPark" src="https://i.ibb.co/C0wV6sr/Francis-Park-3.jpg" />
</section></div>

<div class = "francisParkBody"><h1>More Information on Francis Park</h1></div>

`;

// below is a slideshow feature I have been trying to implement. Found online, works in replit, not on VS Code

/*
var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs((slideIndex += n));
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("forestPark");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}
*/
