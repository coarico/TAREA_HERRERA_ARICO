class RegistroProducto extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.shadowRoot.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      const form = e.target;
      const nuevo = {
        id: Date.now(),
        nombre: form.nombre.value.trim(),
        precio: parseFloat(form.precio.value),
        cantidad: parseInt(form.cantidad.value),
        descripcion: form.descripcion.value.trim()
      };

      if (!nuevo.nombre || isNaN(nuevo.precio) || isNaN(nuevo.cantidad)) {
        alert('Campos inválidos');
        return;
      }

      productos.push(nuevo);
      document.querySelector('lista-productos').render();
      form.reset();
    });
  }

  render = () => {
    this.shadowRoot.innerHTML = `
      <form>
        <input name="nombre" placeholder="Nombre" required>
        <input name="precio" type="number" placeholder="Precio" required>
        <input name="cantidad" type="number" placeholder="Cantidad" required>
        <textarea name="descripcion" placeholder="Descripción" required></textarea>
        <button type="submit">Registrar</button>
      </form>
      <style>
        form { display: flex; flex-direction: column; gap: 10px; padding: 15px; }
        input, textarea, button { padding: 8px; }
      </style>
    `;
  };
}

customElements.define('registro-producto', RegistroProducto);
