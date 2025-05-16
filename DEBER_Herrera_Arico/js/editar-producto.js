class EditarProducto extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['id-producto'];
  }

  attributeChangedCallback(name, oldVal, newVal) {
    this.idProducto = parseInt(newVal);
    this.render();
  }

  render = () => {
    const producto = getProductoPorId(this.idProducto);
    if (!producto) return;

    this.shadowRoot.innerHTML = `
      <form>
        <input name="nombre" value="${producto.nombre}" required>
        <input name="precio" type="number" value="${producto.precio}" required>
        <input name="cantidad" type="number" value="${producto.cantidad}" required>
        <textarea name="descripcion" required>${producto.descripcion}</textarea>
        <button type="submit">Actualizar</button>
      </form>
      <style>
        form { display: flex; flex-direction: column; gap: 10px; padding: 15px; }
        input, textarea, button { padding: 8px; }
      </style>
    `;

    this.shadowRoot.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      const f = e.target;
      const actualizado = {
        id: this.idProducto,
        nombre: f.nombre.value,
        precio: parseFloat(f.precio.value),
        cantidad: parseInt(f.cantidad.value),
        descripcion: f.descripcion.value
      };

      actualizarProducto(actualizado);
      document.querySelector('#editar').style.display = 'none';
      document.querySelector('#registro').style.display = 'block';
      document.querySelector('lista-productos').render();
    });
  };
}

customElements.define('editar-producto', EditarProducto);
