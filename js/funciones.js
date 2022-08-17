const agregarAlCarrito = (e) => {

    // AGREGA PRODUCTO 

    let ordenBoton = e.target.id;
    const productoSeleccionado = productos[ordenBoton];

    for(let i=0;i<adicionales.length;i++)
    {
        let adiNombre = 'adicional' + ordenBoton + i;
        let adiClase = document.getElementById(adiNombre.toString());
      
        if(adiClase.checked){
          productoSeleccionado.detalles.push(adicionales[i]);
          adiClase.checked = false;
        }

     }
     carrito.push(productoSeleccionado);

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
    carritoPrecio = "0";
    carritoProductos = "0";
    localStorage.clear();
    productoLS = [];
    cantidadPedidoCarrito.innerText = "Cantidad de Productos: " + "0";
    precioFinal.innerText = "$ " + "0"
    };

const alertaVaciarCarrito = () => {
  botonVaciarCarrito.addEventListener ("click", (e) => {
  Swal.fire({
    title: '¿Esta seguro que desea eliminar todo su pedido?',
    text: "Tendra que volver a realizarlo",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No',
    confirmButtonText: 'Si, deseo eliminarlo',
  }).then((result) => {
    if (result.isConfirmed) {
      vaciarCarrito();
      renderCarrito();
      Swal.fire(
        'Eliminado',
        'Su pedido ha sido eliminado',
        'success'
      )
    }})
  })
}


const obtenerProductosLS = () => {
 
    let productoLS = "";

    productoLS === null ? productoLS = [] : productoLS = JSON.parse(localStorage.getItem('carrito'));
    };

const botonPedidos = () => {
    let botonRealizarPedido = document.getElementById('botonpedidos');
    carrito.length>0 && botonRealizarPedido.classList.remove('disabled');
    };
    let valorTotal = 0;

const renderCarrito = () => {
  directorio = "."
  mainCarrito.innerHTML = ''
  productoLS.forEach(item => {
    const article = document.createElement('div');
    article.classList.add('productocarrito');
    let detallesInfo = "";
    

    for(let i = 0; i < item.detalles.length ; i++){
      detallesInfo += item.detalles[i].nombre + ", ";
      item.precio += item.detalles[i].precio;
    } 

    valorTotal += item.precio;

    detallesInfo = detallesInfo.substring(0, detallesInfo.length - 2);

    document.getElementById("preciofinal").innerHTML = "$" + valorTotal;
    
    const Content =  ` 
    <hr class="my-4">
    <div class="row mb-4 d-flex justify-content-between align-items-center">
    <div class="col-md-2 col-lg-2 col-xl-2">
      <!-- Imagen -->
      <img src= ${directorio.concat(item.imagen)}
        class="img-fluid rounded-1" id= "imgcarrito" alt="imagenburger">
    </div>
    <div class="col-md-3 col-lg-3 col-xl-3">
      <!-- Producto -->
      <h6 class="text-black mb-0">${item.nombre}</h6>
      <h6 class="text-muted adivacio" id= "textoadicional" >Extra:</h6>
      <p class="detalleadicionales">${detallesInfo}</p>
    </div>
    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
    </div>
    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
    <!-- Adicional -->
    
        <!-- Precio -->
      <h6 class="mb-0">$${item.precio}</h6>
    </div>
    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
      <a href="#!" class="text-muted"><i class="fas fa-times"></i></a>
    </div>
    
  ` 
  article.innerHTML = Content;
  mainCarrito.append(article);
  })
  }

const crearAdicionales = async () => {
  try {
    const resp = await fetch("./js/adicionales.json");
    const datos = await resp.json();

    let extrasLength = document.querySelectorAll('.extras').length;

    for(let p=0; p<extrasLength; p++){
    datos.forEach(item => {
    const adicion = document.createElement('div');
    adicion.classList.add('adicional');
    const Content =  ` 
    <input class="form-check-input adi adicional${item.id}" type="checkbox" value="" id="adicional${p}${item.id}">
    ${item.nombre} =  ${"   $" + item.precio}
  ` 
  adicion.innerHTML = Content;
  document.querySelectorAll('.extras')[p].append(adicion);
});
}
  } catch (error) {
    const mensaje = document.createElement ("div");
    mensaje.innerHTML = `Error al cargar la información ${error}`;
    document.body.append(mensaje);
  }
  
}

const pedidoEnviado = () => {
  botonConfirmado.addEventListener ("click", () => {
    Swal.fire({
      title: '¿Esta seguro que desea confirmar su pedido?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Volver al pedido',
      confirmButtonText: 'Confirmar',
    }).then((result) => {
      if (result.isConfirmed) {
        tomarPedidos();
        vaciarCarrito();
        renderCarrito();
        Swal.fire(
          'PEDIDO ENVIADO',
          'Gracias por su compra',
          'success'
        )
      }
    })
  })
  }

  const tomarPedidos = () => {
      let lstNumero = document.getElementsByClassName("valor"),
          arrayGuardarDatos = [];         
      for (let i = 0; i < lstNumero.length; i++) {    
          arrayGuardarDatos[i] = lstNumero[i].value;
          }    
      }
  
  
