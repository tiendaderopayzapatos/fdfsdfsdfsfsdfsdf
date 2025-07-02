// Lista de productos con precios dinámicos y tallas ajustadas
const productos = [
  { id: 1, nombre: "Zapatos deportivos", precio: 29.99, talla: ["36", "37", "38", "39", "40"] },
  { id: 2, nombre: "Camiseta Básica", precio: 15.99, talla: ["XS", "S", "M", "L", "XL"] },
  { id: 3, nombre: "Jeans Ajustados", precio: 25.99, talla: ["S", "M", "L", "XL"] },
  { id: 4, nombre: "Chaqueta de Cuero", precio: 49.99, talla: ["S", "M", "L", "XL", "XXL"] },
  { id: 5, nombre: "Bikini", precio: 19.99, talla: ["S", "M", "L"] }
];

function mostrarProductos() {
  productos.forEach(producto => {
    const contenedorProducto = document.createElement('div');
    contenedorProducto.innerHTML = `
      <h3>${producto.nombre}</h3>
      <p>Precio: $${producto.precio}</p>
      <select>
        ${producto.talla.map(t => `<option value="${t}">${t}</option>`).join('')}
      </select>
    `;
    document.getElementById('productos').appendChild(contenedorProducto);
  });
}
