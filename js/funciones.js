const agregarAlCarrito = (e) => {

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

const alertaAgregarAlCarrito = () => {

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
    };

const totalCarrito = () => {
    let total = 0;
    for (const producto of carrito) {
      total += producto.precio;
    }
      
    carritoPrecio = total;
    carritoProductos = carrito.length;
      
    };

const vaciarCarrito = () => {
    carritoPrecio.innerText = "0";
    carritoProductos.innerText = "0";
    localStorage.clear();
    carrito
    };


const obtenerProductosLS = () => {
    let productoLS = "";
      
    if(localStorage.getItem('carrito') === null){
        productoLS = [];
    }
    else {
        productoLS = JSON.parse(localStorage.getItem('carrito'));
    }
    return productoLS;
      
    };


const botonPedidos = () => {
    let botonRealizarPedido = document.getElementById('botonpedidos');
    carrito.length>0 && botonRealizarPedido.classList.remove('disabled');
    };



