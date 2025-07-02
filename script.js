// Verificar que el usuario haya iniciado sesión antes de agregar productos al carrito
function agregarAlCarrito(producto) {
  if (!sessionStorage.getItem('usuario')) {
    alert('Debes iniciar sesión para agregar productos al carrito.');
    return;
  }
  // Código para agregar el producto al carrito
}

// Mostrar el nombre de usuario en el menú después de iniciar sesión
if (sessionStorage.getItem('usuario')) {
  document.getElementById('usuario').innerText = sessionStorage.getItem('usuario');
} else {
  document.getElementById('usuario').innerText = 'Iniciar sesión';
}

// Validación para aceptar solo tarjetas de 16 dígitos sin letras
document.getElementById('tarjeta').addEventListener('input', function(event) {
  let valor = event.target.value;
  if (valor.length > 16) {
    valor = valor.slice(0, 16); // Limitar a 16 caracteres
  }
  event.target.value = valor.replace(/[^0-9]/g, ''); // Eliminar cualquier letra
});
