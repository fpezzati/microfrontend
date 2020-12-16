const tmplt = document.createElement('template');
tmplt.innerHTML = `
<div>
  <label for="sendnpt">message:</label>
  <input id="sendnpt" type="text"></input>
  <button id="sendbtn">Send the message</button>
  <div id="msglog"></div>
</div>
`;

var input = {};

window.customElements.define('team-zero', class TeamZero extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(tmplt.content.cloneNode(true));
    this.button = this._shadowRoot.getElementById('sendbtn');
    input = this._shadowRoot.getElementById('sendnpt');
    this.button.addEventListener('click', function(evt) {
      var msg = { bubbles: true, detail: {} };
      msg.detail.name = input.value;
      console.log('sending msg: ' + JSON.stringify(msg))
      window.dispatchEvent(new CustomEvent('greet', msg));
    });
  }
  connectedCallback() {
    console.log('connected and ready!');
  }
});
