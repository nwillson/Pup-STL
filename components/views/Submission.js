import html from "html-literal";

export default () => html`


<div class = "topPicks"><h1>Dog Owner Care Guide to St. Louis</h1></div>


<div class = "donation"><center><h1>To Help, Make A Donation, or Read More about Dogs in Need of Help, visit</h1>



      <li>
        <a
          href="https://www.strayrescue.org/"
          >The Stray Rescue of St. Louis</a>
      </li>

      <li>
        <a
          href="https://www.icarestl.org/"
          >I Care STL</a>
      </li>


      <li>
        <a
          href="https://apamo.org/"
          >APA MO</a>
        </li>



        <li>
          <a
          href="https://stlpetrescue.com/"
          >STL Pet Rescue</a>
        </li>

        <li>
        <a
          href="https://www.hsmo.org/adopt/"
          >Humane Soceity of Missouri</a>
        </li>

</center></div>





<div class = "gatedDogParkHeader"><h1>Veterinarians in the Area</h1></div>
<br>

<div class = "vets"><h1>Hampton Animal Hospital</h1>
<h4>Hampton Ave, St. Louis, MO 63139</h4>
<li>Full Services</li>

<br>

<h1>Carol House Quick Fix Pet Clinic</h1>
<h4>1218 Jefferson Ave, St. Louis, MO 63104</h4>
<li>Non-profit agency that offers low-cost neuter, spay services, and immunizations</li>

<br>

<h1>Banfield Pet Hospital</h1>
<h4>4621 Chippewa St, St. Louis, MO 63116</h4>
<li>Full Services</li>
<li>Over 1,000 hospitals throughout the U.S.</li>

<br>

<h1>Watson Road Animal Hospital</h1>
<h4>Watson Rd, St. Louis, MO 63109</h4>
<li>Full Services</li>

<br>

<h1>Jefferson Animal Hospital</h1>
<h4>2120 S Jefferson Ave, St. Louis, MO 63104</h4>
<li>Full Services</li>

<br>

<h1>Chippewa Animal Hospital</h1>
<h4>3850 Chippewa St, St. Louis, MO 63116</h4>
<li>Full Services</li>

<br>

<h1>St. Louis Veterinary Center</h1>
<h4>1611 S Grand Blvd, St. Louis, MO 63104</h4>
<li>Full Services</li>

<br>

<h1>Mobile Veterinarian Services</h1>
<li>Mobile</li>

<br>

<h1>Hillside Animal Hospital</h1>
<h4>5325 Manchester Ave, St. Louis, MO 63110</h4>
<li>Full Services</li>

<br>

<h1>Arch Animal Hospital</h1>
<h4>2951 Dougherty Ferry Rd #102, St. Louis, MO 63122</h4>
<li>Full Services</li>

<br>

<h1>Central West End Veterinary Hospital</h1>
<h4>4131 Lindell Blvd, St. Louis, MO 63108</h4>
<li>Full Services</li>

<br>

<h1>St. Louis Hills Veterinary Clinic</h1>
<h4>7001 Hampton Ave, St. Louis, MO 63109</h4>
<li>Full Services</li>

<br>

<h1>MacKenzie Pointe Animal Hospital</h1>
<h4>7227 Watson Rd, St. Louis, MO 63119</h4>
<li>Full Services</li>

<br>
</div>



<form
  action="https://formspree.io/f/xlevwjqy"
  method="POST"
>  <div class = "submit"><h1>
        Make a Submission! Let us know about your favorite Dog-Friendly Place!
      </h1></div>
      <div class = "formBox"><div>
        <label for="type">Type of Place</label>
        <select id="type" name="type">
          <option value="">Type of Submission</option>
          <option value="public-park">Public Park</option>
          <option value="restaurants-bars">Restaurants/Bars</option>
          <option value="gated-dog-parks">Gated Dog Park</option>
          <option value="coffee">Coffee</option>
        </select>
      </div>
      <div>
        <label for="name">Name:</label>
        <input
          type="text"
          name="formLocation"
          id="formLocation"
          placeholder="Enter Name of Location"
          required
        />
      </div>
      <div>
        <label for="additionalInformation">Any Additional Information:</label>
        <input
          type="text"
          name="additionalInformation"
          id="additionalInformation"
          placeholder="Additonal Information"
        />
      </div>
      <div></div>



      <input type="submit" name="submit" value="Submit" /></form>


`;
