// ------- CARRITO ---------

let carrito = [];

let cantidadPedido = document.getElementById('cantidadpedido');


// OBTENER PRODUCTOS LOCAL STORAGE

let productoLS = "";

productoLS === null ? productoLS = [] : productoLS = JSON.parse(localStorage.getItem('carrito'));
console.log("Productos en Carrito");
console.log(productoLS);

totalCarrito();

let cantidadPedidoCarrito = document.getElementById('cantidadpedidocarrito');

cantidadPedidoCarrito.innerText = "Cantidad de Productos: " + carritoProductos;

let precioFinal = document.getElementById('preciofinal');

precioFinal.innerText = "$ " + carritoPrecio

// RENDERIZAR CARRITO

const mainCarrito = document.querySelector ('.maincarrito');
renderCarrito();


// CONFIRMAR PEDIDO

let clicConfirmado = document.getElementById ('botonconfirmado')

















