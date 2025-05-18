class MenuNavegacion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    const enlaces = this.shadowRoot.querySelectorAll('a');
    enlaces.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const destino = link.getAttribute('href');
        document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
        document.querySelector(destino).style.display = 'block';
      });
    });
  }

  render = () => {
    this.shadowRoot.innerHTML = `
      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#registro">Gestión Productos</a>
        <a href="#acerca">Acerca de</a>
      </nav>
      <style>
        nav {
          background-color: #4c4caf;
          padding: 10px;
          display: flex;
          gap: 20px;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: bold;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
    `;
  };
}

customElements.define('menu-navegacion', MenuNavegacion);
