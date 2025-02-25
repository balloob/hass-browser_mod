import { LitElement, html, css } from "card-tools/src/lit-element";
import { registerCard } from "card-tools/src/editor";

class BrowserPlayerEditor extends LitElement {
    setConfig(config) {

    }
    render() {
        return html`
        <div>
        Nothing to configure.
        </div>
        `;
    }
}

if(!customElements.get("browser-player-editor")) {
  customElements.define("browser-player-editor", BrowserPlayerEditor);
  window.customCards = window.customCards || [];
  window.customCards.push({type:"browser-player", name: "Browser Player", preview: true});
}
