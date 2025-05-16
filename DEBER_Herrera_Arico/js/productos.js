window.productos = [];

window.getProductoPorId = (id) => productos.find(p => p.id === id);

window.eliminarProducto = (id) => {
  const index = productos.findIndex(p => p.id === id);
  if (index !== -1) productos.splice(index, 1);
};

window.actualizarProducto = (producto) => {
  const i = productos.findIndex(p => p.id === producto.id);
  if (i !== -1) productos[i] = producto;
};
