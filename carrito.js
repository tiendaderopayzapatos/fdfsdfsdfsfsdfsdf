// Mostrar resumen del carrito y calcular total
function mostrarResumenCarrito() {
  let total = 0;
  carrito.forEach(producto => {
    total += producto.precio;
  });

  document.getElementById('total').innerText = `Total a pagar: $${total}`;
}

// Verificar si el carrito está vacío antes de mostrar el botón de pagar
function actualizarBotonPagar() {
  if (carrito.length === 0) {
    document.getElementById('boton-pagar').style.display = 'none';
  } else {
    document.getElementById('boton-pagar').style.display = 'block';
  }
}

// Función para vaciar el carrito
function vaciarCarrito() {
  carrito = [];
  mostrarResumenCarrito();
  actualizarBotonPagar();
}
