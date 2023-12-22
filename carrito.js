document.addEventListener("DOMContentLoaded", function () {
    const carrito = [];
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    const carritoElement = document.getElementById('carrito');
  
    function agregarAlCarrito(producto) {
      carrito.push(producto);
      actualizarCarrito();
      mostrarCarrito();
    }
  
    function actualizarCarrito() {
      listaCarrito.innerHTML = '';
      let total = 0;
  
      carrito.forEach((producto) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}`;
        listaCarrito.appendChild(listItem);
  
        total += producto.precio;
      });
  
      totalElement.textContent = total.toFixed(2);
    }
  
    function mostrarCarrito() {
      if (carrito.length > 0) {
        carritoElement.style.width = '300px';
      }
    }
  });
  
  