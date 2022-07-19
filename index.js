// alert ("Tienda de Hamburguesas");

// // ------- Estructura Base ----------

// let burgerEstandar = 1000;

// const suma = (a,b) => a + b;
// const resta = (a,b) => a - b;
// const variablePrecio = burgerEstandar * 0.20;

// function precioTamañoMensaje (burgerEstandar, variablePrecio, burgerTamaño) {
// let mensaje = 'Precio';
//         switch (burgerTamaño) {
//             case "SIMPLE":
//                 mensaje = "El precio base es de $" + (burgerEstandar);
//                 break;
//             case "DOBLE":
//                 mensaje = "El precio base es de $" + (suma(burgerEstandar,variablePrecio));
//                 break;
//             case "TRIPLE":
//                 mensaje = "El precio base es de $" + (suma(burgerEstandar,(variablePrecio*2)));
//                 break;
//             default:
//                 mensaje = 0;
//                 break;
//                 };
// 			return mensaje;

//             };

// function precioTamañoValor (){
// if (burgerTamaño === "SIMPLE") {burgerTamaño = burgerEstandar}
// else if (burgerTamaño === "DOBLE") {burgerTamaño = suma(burgerEstandar,variablePrecio)}
// else if (burgerTamaño === "TRIPLE") {burgerTamaño = suma(burgerEstandar,(variablePrecio*2))};
// }

// function precioExtra (extra) {

//     switch (extra) {
//     case "PANCETA":
//         alert("Muchas Gracias, el precio final de su pedido es de $ " + (burgerTamaño + 200));
//         break;

//     case "CEBOLLA":
//         alert("Muchas Gracias, el precio final de su pedido es de $ " + (burgerTamaño + 150));
//         break;

//     case "PEPINO":
//         alert("Muchas Gracias, el precio final de su pedido es de $ " + (burgerTamaño + 100));
//         break;

//     case "QUESO":
//         alert("Muchas Gracias, el precio final de su pedido es de $ " + (burgerTamaño + 200));
//         break;

//     case "NO":
//             alert("Muchas Gracias, el precio final de su pedido es de $ " + burgerTamaño);
//             break;

//     default:
//         alert("Error, vuelva a intentarlo nuevamente");
//         extra;
//         break;

// }

// };

// function pedirNombre () {
//   return nombre = prompt ("Ingrese su nombre");
// };

// function pedirApellido () {
//   return apellido = prompt ("Ingrese su apellido");
// };

// function pedirDireccion () {
//     return direccion = prompt ("Ingrese su dirección");
//   };

// function agregarCliente () {
//   let nuevoCliente = new Cliente(nombre,apellido,direccion);

//   console.log(nuevoCliente);

//   listaClientes.push(nuevoCliente);

//     console.log(listaClientes);

// };


// // ------- INICIO ---------

// alert ("Ingrese sus datos y recibirá su N° de orden");

// for (let i = 1; i<50; i++) {

// 	let nombre = pedirNombre();
// 	let apellido = pedirApellido();
//     let direccion = pedirDireccion();

// 	while ((nombre=="") || (apellido=="") || (direccion=="")) {
//         alert ("Error: Ingresar datos correctamente");
//         nombre = pedirNombre();
// 		apellido = pedirApellido();
//         direccion = pedirDireccion();
//     }

//     alert (" Orden N° " + i + " " + nombre + " " + apellido + "-  " + direccion);

// 	if(i === 5)
//     {   alert (" Se ha llegado al límite de ordenes disponibles en el día, intente nuevamente mañana");
// 		break;
// 	}

// }

// let orden = parseInt (prompt ("Ingrese su N° de Orden"));

// if (orden > 5) {
//     alert ("Su orden no corresponde al día asignado");}

// else {orden};

// let burgerTamaño = prompt ("Ingrese el tamaño de su Hamburguesa (Simple - Doble - Triple)").toUpperCase ();

// let precioBase = parseInt (alert(precioTamañoMensaje (burgerEstandar, variablePrecio, burgerTamaño)));

// precioTamañoValor ();

// console.log(precioTamañoValor());

// alert ("¿Desea agregar algun extra?");

// let extra = prompt ("Panceta - Queso - Cebolla - Pepino - No").toUpperCase ();

// precioExtra (extra);


// ------- ARRAYS ---------

// class Cliente {
//       constructor (nombre,apellido,direccion){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.direccion = direccion;
//     }
//   };

// const listaClientes = [];
// agregarCliente();


class Producto{
    constructor(id, nombre, precio, imagen){
      this.id = id
      this.nombre = nombre.toUpperCase();
      this.precio = parseInt(precio);
      this.imagen = imagen 
    }
  };

  const productos = [];
  productos.push(new Producto(0, "CHEESE BURGER", 900, "./public/cheeseburger.jpg"));
  productos.push(new Producto(1, "CHEESEBACON BURGER", 1000, "./public/cheesebaconburger.jpg"));
  productos.push(new Producto(2, "CRISPY BURGER", 1100, "./public/crispyburger.jpg"));
  productos.push(new Producto(3, "AMERICAN BURGER", 1100, "./public/americanburger.jpg"));
  productos.push(new Producto(4, "ONION BURGER", 1100, "./public/onionburger.jpg"));
  productos.push(new Producto(5, "VEGGIE", 1000, "./public/veggieburger.jpg"));


  for(const producto of productos){
    // console.log(producto);
  };



  class Adicional{
    constructor(nombre, precio){
      this.nombre = nombre.toUpperCase();
      this.precio = parseInt(precio);
    }
  };

  const adicionales = [];
  adicionales.push(new Adicional("PANCETA", 200));
  adicionales.push(new Adicional("QUESO", 150));
  adicionales.push(new Adicional("CEBOLLA", 100));
  adicionales.push(new Adicional("PEPINO", 200));
  adicionales.push(new Adicional("NO", 0));

  for(const adicional of adicionales){
    // console.log(adicional);
  };

const listaPreciosTotal = productos.concat(adicionales);
console.log("Lista Total de Precios:", listaPreciosTotal)




// ------- DOM BASE ---------


for (let contador = 0; contador < productos.length; contador++) {

  let precioHtml = document.getElementsByClassName("precio");
precioHtml[contador].innerText = "$" + productos[contador].precio;

let burgerHtml = document.getElementsByClassName("nombreburger");
burgerHtml[contador].innerText = productos[contador].nombre;

let burgerimgHtml = document.getElementsByClassName("imgburger");

burgerimgHtml[contador].src = productos[contador].imagen;

};


// ------- CARRITO ---------

let carrito = [];

let cantidadpedido = document.getElementById('cantidadpedido');

i=0;

function sumarProducto() {
  i++;
  cantidadpedido.textContent = i;
}

let clicBurger = document.getElementsByClassName("botonagregar");

for (let i = 0; i < productos.length; i++){
clicBurger[i].addEventListener("click", agregarAlCarrito);
clicBurger[i].addEventListener("click", sumarProducto);
clicBurger[i].addEventListener("click", totalCarrito);
};

function agregarAlCarrito (e) {
let ordenBoton = e.target.id;
 carrito.push(productos[ordenBoton]);
 console.log(carrito);
};

function totalCarrito() {
  let total = 0;
  for (const producto of carrito) {
    total += producto.precio;
  }

  carritoPrecio = total;
  carritoProductos = carrito.length;

}

totalCarrito();
console.log("Precio Carrito:", carritoPrecio);
console.log("Total de Productos:", carritoProductos);

function guardarProductosLS(producto){
  let carrito = "";
  carrito = this.obtenerProductosLS();
  carrito.push(producto);
  localStorage.setItem('productos', JSON.stringify(productos));
}

function obtenerProductosLS(){
  let productoLS = "";

  if(localStorage.getItem('productos') === null){
      productoLS = [];
  }
  else {
      productoLS = JSON.parse(localStorage.getItem('productos'));
  }
  return productoLS;

}

guardarProductosLS;
obtenerProductosLS;


// function vaciarCarrito () {
//   carritoPrecio.innerText = "0";
//   carritoProductos.innerText = "0";
//   localStorage.clear();
//   carrito
// }

// Continuar - Orden y Estructura / Ternario, & & y || / Carrito Pre HTML / Carrito Page HTML / 











