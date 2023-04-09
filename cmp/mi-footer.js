class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Reza Cerna Vladimir.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
