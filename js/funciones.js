const agregarAlCarrito = (e) => {

    // AGREGA PRODUCTO 

    let ordenBoton = e.target.id;
     carrito.push(productos[ordenBoton]);
     console.log(carrito);

    // AUMENTA NRO DE PEDIDO

    i++;
    cantidadPedido.textContent = i;

    // ACTUALIZA LS

    localStorage.setItem('carrito', JSON.stringify(carrito));
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
              totalCarritoIndex();
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

const totalCarritoIndex = () => {
    let total = 0;
    for (const producto of carrito) {
      total += producto.precio;
    }
      
    carritoPrecio = total;
    carritoProductos = carrito.length;
      
    };

const totalCarrito = () => {
  let total = 0;
  for (const producto of productoLS) {
    total += producto.precio;
  }
        
  carritoPrecio = total;
  carritoProductos = productoLS.length;
        
  };

const vaciarCarrito = () => {
    carritoPrecio.innerText = "0";
    carritoProductos.innerText = "0";
    localStorage.clear();
    carrito
    };


const obtenerProductosLS = () => {
 
    let productoLS = "";

    productoLS === null ? productoLS = [] : productoLS = JSON.parse(localStorage.getItem('carrito'));
    console.log("Productos en Carrito");
    console.log(productoLS);
    };

const botonPedidos = () => {
    let botonRealizarPedido = document.getElementById('botonpedidos');
    carrito.length>0 && botonRealizarPedido.classList.remove('disabled');
    };

const renderCarrito = () => {
  directorio = "."
  mainCarrito.innerHTML = ''
  productoLS.forEach(item => {
    const article = document.createElement('div');
    article.classList.add('productocarrito');
    const Content =  ` 
    <hr class="my-4">
    <div class="row mb-4 d-flex justify-content-between align-items-center">
    <div class="col-md-2 col-lg-2 col-xl-2">
      <!-- Imagen -->
      <img src= ${directorio.concat(item.imagen)}
        class="img-fluid rounded-3" alt="imagenburger">
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3">
      <!-- Producto -->
      <h6 class="text-black mb-0">${item.nombre}</h6>
       <!-- Adicional -->
      <h6 class="text-muted">Adicional</h6>
      
    </div>
    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
        <!-- Cantidad -->
      <button class="btn btn-link px-2"
        onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
        <i class="fas fa-minus"></i>
      </button>

      <input id="form1" min="0" name="quantity" value="1" type="number"
        class="form-control form-control-sm" />

      <button class="btn btn-link px-2"
        onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
        <i class="fas fa-plus"></i>
      </button>
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
        <!-- Precio -->
      <h6 class="mb-0">$${item.precio}</h6>
    </div>
    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
    </div>
    
  ` 
  article.innerHTML = Content;
  mainCarrito.append(article)
  })
  }

