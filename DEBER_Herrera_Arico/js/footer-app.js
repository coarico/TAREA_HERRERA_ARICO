class FooterApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <footer>
        © 2025 Todos los derechos reservados. |
        <a href="https://github.com" target="_blank">GitHub</a>
        <a href="https://linkedin.com" target="_blank">LinkedIn</a>
      </footer>
      <style>
        footer {
          background: #4c4caf;
          color: white;
          padding: 10px;
          text-align: center;
        }
        a {
          color: white;
          margin-left: 10px;
          text-decoration: none;
        }
      </style>
    `;
  }
}

customElements.define('footer-app', FooterApp);
