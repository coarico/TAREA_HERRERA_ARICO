// Definición de un componente personalizado para el pie de página (footer)
class FooterApp extends HTMLElement {
  constructor() {
    super();
    // Adjunta un shadow DOM para encapsular el componente
    this.attachShadow({ mode: 'open' });
  }

  // Se ejecuta cuando el elemento es insertado en el DOM
  connectedCallback() {
    // Inserta el contenido HTML y los estilos en el shadow DOM
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

// Define el elemento personalizado 'footer-app'
customElements.define('footer-app', FooterApp);
