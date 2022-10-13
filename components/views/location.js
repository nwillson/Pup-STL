import html from "html-literal";

export default st => `
<table id="Submission">
<tr><th>Type of Place</th><th>Name</th><th>Any Additional Information</th></tr>
${st.location
  .map(location => {
    return `<tr><td>${location.name}</td><td>${location.neighborhood}</td></tr>`;
  })
  .join("")}

</table>
`;
