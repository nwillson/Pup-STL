import html from "html-literal";

export default () => html`

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
