import html from "html-literal";
import * as views from "./views";

export default state => html`
  ${views[state.view](state)}
  <div class="crime"><h1>Crime</h1></div>
  <div class="topPicks"><h1>Our Top Picks</h1></div>
`;
