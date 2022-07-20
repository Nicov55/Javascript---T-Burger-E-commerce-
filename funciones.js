function agregarAlCarrito (e) {

    // AGREGA PRODUCTO 

    let ordenBoton = e.target.id;
     carrito.push(productos[ordenBoton]);
     console.log(carrito);

    // AUMENTA NRO DE PEDIDO

    i++;
    cantidadpedido.textContent = i;

    // ACTUALIZA LS

    localStorage.setItem('carrito', JSON.stringify(carrito))
    };

function totalCarrito() {
    let total = 0;
    for (const producto of carrito) {
      total += producto.precio;
    }
      
    carritoPrecio = total;
    carritoProductos = carrito.length;
      
    };

function vaciarCarrito () {
    carritoPrecio.innerText = "0";
    carritoProductos.innerText = "0";
    localStorage.clear();
    carrito
    };


function obtenerProductosLS(){
    let productoLS = "";
      
    if(localStorage.getItem('carrito') === null){
        productoLS = [];
    }
    else {
        productoLS = JSON.parse(localStorage.getItem('carrito'));
    }
    return productoLS;
      
    }

// function variablePrecio () {
// let clicSimple = 

// let clicDoble = 

// let clicTriple =

// }
      


