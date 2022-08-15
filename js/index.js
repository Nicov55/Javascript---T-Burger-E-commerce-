// ----------- PRODUCTOS -----------

class Producto{
    constructor(id, nombre, precio, imagen, descripcion){
      this.id = id
      this.nombre = nombre.toUpperCase();
      this.precio = parseInt(precio);
      this.imagen = imagen 
      this.descripcion = descripcion.toUpperCase()
    }
  };

  const productos = [];
  productos.push(new Producto(0, "CHEESE BURGER", 900, "./public/cheeseburger.jpg", "Hamburguesa en pan de queso, con dos medallones de 120gr y 4 fetas de queso cheddar con papas fritas"));
  productos.push(new Producto(1, "BACON BURGER", 1000, "./public/cheesebaconburger.jpg", "Hamburguesa en pan de papa, con dos medallones de 120gr, 4 fetas de queso cheddar, doble panceta ahumada y salsa BK con papas fritas"));
  productos.push(new Producto(2, "CRISPY BURGER", 1100, "./public/crispyburger.jpg", "Hamburguesa en pan de papa, con dos medallones de 120gr, 4 fetas de queso cheddar, doble panceta ahumada, cebolla crispy y salsa thousand island con papas fritas"));
  productos.push(new Producto(3, "AMERICAN BURGER", 1100, "./public/americanburger.jpg", "Hamburguesa en pan de papa, con dos medallones de 120gr, 4 fetas de queso cheddar , lechuga, tomate, pepino, cebolla y salsa BM con papas fritas"));
  productos.push(new Producto(4, "ONION BURGER", 1100, "./public/onionburger.jpg", "Hamburguesa en pan de papa, con doble carne de 120gr smasheada con cebolla a la plancha y 4 fetas de queso cheddar con papas fritas"));
  productos.push(new Producto(5, "VEGGIE", 1000, "./public/veggieburger.jpg", "Hamburguesa en pan de papa, medallon de lentejas, rucula, parmesano, tomate y salsa de albahaca con papas fritas"));


  for(const producto of productos){
    // console.log(producto);
  };


// ----------- ADICIONALES -----------

  class Adicional{
    constructor(nombre, precio){
      this.nombre = nombre.toUpperCase();
      this.precio = parseInt(precio);
    }
  };

  const adicionales = [];
  adicionales.push(new Adicional("CARNE + CHEDDAR", 300));
  adicionales.push(new Adicional("PANCETA", 200));
  adicionales.push(new Adicional("QUESO CHEDDAR", 150));
  adicionales.push(new Adicional("CEBOLLA", 100));
  adicionales.push(new Adicional("PEPINO", 100));


  for(const adicional of adicionales){
  };

const listaPreciosTotal = productos.concat(adicionales);
console.log("Lista Total de Precios:", listaPreciosTotal)




// ----------- DOM BASE (N) -----------

const extras = document.getElementsByClassName('extras');

for (let contador = 0; contador < productos.length; contador++) {

  let precioHtml = document.getElementsByClassName("precio");
precioHtml[contador].innerText = "$" + productos[contador].precio;

let burgerHtml = document.getElementsByClassName("nombreburger");
burgerHtml[contador].innerText = productos[contador].nombre;

let burgerimgHtml = document.getElementsByClassName("imgburger");
burgerimgHtml[contador].src = productos[contador].imagen;

let descripcionHtml = document.getElementsByClassName("descripcion");
descripcionHtml[contador].innerText = productos[contador].descripcion;

// let extrasHtml = document.getElementsByClassName("extras");
// extrasHtml[contador].innerHTML = "llenar"
};





crearAdicionales();

// ------- CARRITO ---------

let carrito = [];

const mainCarrito = document.querySelector ('.maincarrito')

let cantidadPedido = document.getElementById('cantidadpedido');

let cantidadPedidoCarrito = document.getElementById('cantidadpedidocarrito');


i=0;

let clicBurger = document.getElementsByClassName("botonagregar");

alertaAgregarAlCarrito();






// Carrito Pre HTML / Carrito Page HTML / Librerias

// PARA FINALIZAR CARRITO EN NUEVO HTML, TOMAR INDICE DE LS

// MODAL BS - Adicionales y Carrito
















