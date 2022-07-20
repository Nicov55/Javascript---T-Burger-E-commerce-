function aumentarPedido() {
    i++;
    cantidadpedido.textContent = i;
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
      
    };

function vaciarCarrito () {
    carritoPrecio.innerText = "0";
    carritoProductos.innerText = "0";
    localStorage.clear();
    carrito
    };

function guardarProductosLS(producto){
    let carrito = "";
    carrito = this.obtenerProductosLS();
    carrito.push(producto);
    localStorage.setItem('productos', JSON.stringify(productos));
    };
      
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


      


