const tmplt = document.createElement('template');
tmplt.innerHTML = `
<div>
  <label for="sendnpt">message:</label>
  <input id="sendnpt" type="text"></input>
  <button id="sendbtn">Send the message</button>
</div>
`;

window.customElements.define('team-zero', class TeamZero extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(tmplt.content.cloneNode(true));
    this.button = this._shadowRoot.getElementById('sendbtn');
    this.button.addEventListener('click', function(evt) {
      console.log('clicked');
    });
  }
  connectedCallback() {
    console.log('connected!');
  }
});
