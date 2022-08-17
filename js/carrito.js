// ------- CARRITO ---------

let carrito = [];

let cantidadPedido = document.getElementById('cantidadpedido');


// OBTENER PRODUCTOS LOCAL STORAGE

let productoLS = "";

productoLS === null ? productoLS = [] : productoLS = JSON.parse(localStorage.getItem('carrito'));

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

// VACIAR CARRITO

let botonVaciarCarrito = document.getElementById('vaciarcarrito');

// CONFIRMAR PEDIDO

let botonConfirmado = document.getElementById('botonconfirmado');

alertaVaciarCarrito();
pedidoEnviado();
tomarPedidos();












