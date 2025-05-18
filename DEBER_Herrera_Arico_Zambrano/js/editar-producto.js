// Definición de un componente personalizado para editar productos
class EditarProducto extends HTMLElement {
  constructor() {
    super();
    // Adjunta un shadow DOM para encapsular el componente
    this.attachShadow({ mode: 'open' });
  }

  // Observa cambios en el atributo 'id-producto'
  static get observedAttributes() {
    return ['id-producto'];
  }

  // Se ejecuta cuando cambia el atributo observado
  attributeChangedCallback(name, oldVal, newVal) {
    this.idProducto = parseInt(newVal);
    this.render();
  }

  // Renderiza el formulario de edición con los datos del producto
  render = () => {
    const producto = getProductoPorId(this.idProducto); // Obtiene el producto por ID
    if (!producto) return;

    // Inserta el formulario en el shadow DOM
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

    // Maneja el evento de envío del formulario
    this.shadowRoot.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      const f = e.target;
      // Crea un objeto con los datos actualizados
      const actualizado = {
        id: this.idProducto,
        nombre: f.nombre.value,
        precio: parseFloat(f.precio.value),
        cantidad: parseInt(f.cantidad.value),
        descripcion: f.descripcion.value
      };

      // Actualiza el producto y muestra la lista de productos
      actualizarProducto(actualizado);
      document.querySelector('#editar').style.display = 'none';
      document.querySelector('#registro').style.display = 'block';
      document.querySelector('lista-productos').render();
    });
  };
}

// Define el elemento personalizado 'editar-producto'
customElements.define('editar-producto', EditarProducto);
