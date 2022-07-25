// ----------- PRODUCTOS -----------

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


// ----------- ADICIONALES -----------

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




// ----------- DOM BASE (N) -----------


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

let clicBurger = document.getElementsByClassName("botonagregar");

for (let i = 0; i < productos.length; i++){

clicBurger[i].addEventListener("click", (e) => {
  
  Swal.fire({
    title: '¿Agregar al Pedido?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Agregar',
    cancelButtonText: 'Cancelar',
  }).then((result) => {
    if (result.isConfirmed) {
      agregarAlCarrito(e);
      totalCarrito();
      botonPedidos();
      console.log("Precio Carrito:", carritoPrecio);
      console.log("Total de Productos:", carritoProductos);
      Swal.fire({
        title: productos[i].nombre + ' AGREGADA',
        text: 'Podes continuar realizando tu pedido',
        imageUrl: productos[i].imagen,
        imageWidth: 250,
        imageHeight: 250,
        imageAlt: 'Burger Imagen',
      })
    }
  })
}
);
};


// Carrito Pre HTML / Carrito Page HTML / Librerias

// PARA FINALIZAR CARRITO EN NUEVO HTML, TOMAR INDICE DE LS, Cambiar boton a finalizar pedido

// MODAL BS - Adicionales y Carrito
















