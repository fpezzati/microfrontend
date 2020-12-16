const m = require('mithril');
window.customElements.define('team-one', class TeamOne extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    window.addEventListener('greet', (msg) => {
      console.log("a message arrives: " + JSON.stringify(msg));
    });
  }
  connectedCallback() {
    console.log('connected!');
    m.mount(this._shadowRoot, {
      view: function(vnode) {
        return m("div", "team-0ne runs mithril!");
      }
    });
  }
});
