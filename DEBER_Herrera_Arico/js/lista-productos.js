class ListaProductos extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render = () => {
    const filas = productos.map(p => `
      <tr>
        <td>${p.id}</td>
        <td>${p.nombre}</td>
        <td>${p.precio}</td>
        <td>${p.cantidad}</td>
        <td>${p.descripcion}</td>
        <td>
          <button data-id="${p.id}" class="edit">Editar</button>
          <button data-id="${p.id}" class="del">Eliminar</button>
        </td>
      </tr>
    `).join("");

    this.shadowRoot.innerHTML = `
      <table>
        <thead>
          <tr><th>ID</th><th>Nombre</th><th>Precio</th><th>Cantidad</th><th>Descripción</th><th>Acciones</th></tr>
        </thead>
        <tbody>${filas}</tbody>
      </table>
      <style>
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { border: 1px solid #ccc; padding: 8px; text-align: center; }
        th { background-color: #4c4caf; color: white; }
      </style>
    `;

    this.shadowRoot.querySelectorAll('.del').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        eliminarProducto(id);
        this.render();
      });
    });

    this.shadowRoot.querySelectorAll('.edit').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        const editor = document.querySelector('editar-producto');
        editor.setAttribute('id-producto', id);
        document.querySelector('#registro').style.display = 'none';
        document.querySelector('#editar').style.display = 'block';
      });
    });
  };
}

customElements.define('lista-productos', ListaProductos);
