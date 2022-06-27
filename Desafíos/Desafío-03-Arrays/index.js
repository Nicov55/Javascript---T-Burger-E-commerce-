// alert ("Tienda de Hamburguesas")

// let burgerEstandar = 1000;
	
// const suma = (a,b) => a + b;
// const resta = (a,b) => a - b;
// const variablePrecio = burgerEstandar * 0.20;

// function precioTamaño (burgerEstandar, variablePrecio, burgerTamaño) {
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
            

// function adicionalesPrecio (adicionales) {
    
//     switch (adicionales) {
//     case "PANCETA":
//         alert("Muchas Gracias, el precio final de su pedido es de $ " + (precioBase + 200));
//         break;
        
//     case "CEBOLLA":
//         alert("Muchas Gracias, el precio final de su pedido es de $ " + (precioBase + 150));
//         break;

//     case "PEPINO":
//         alert("Muchas Gracias, el precio final de su pedido es de $ " + (precioBase + 100));
//         break;
        
//     case "QUESO":
//         alert("Muchas Gracias, el precio final de su pedido es de $ " + (precioBase + 200));
//         break;

//     default:
//         alert("Error, vuelva a intentarlo nuevamente");
//         adicionales;
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


// // INICIO

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
//     {   alert (" Se ha llegado al límite de turnos disponibles en el día, intente nuevamente mañana");
// 		break;
// 	}

// }

// let orden = parseInt (prompt ("Ingrese su N° de Orden"));

// if (orden > 5) {
//     alert ("Su orden no corresponde al día asignado");}

// else {orden};

// let burgerTamaño = prompt ("Ingrese el tamaño de su Hamburguesa (Simple - Doble - Triple)").toUpperCase ();

// precioBase = parseInt (alert(precioTamaño (burgerEstandar, variablePrecio, burgerTamaño)));

// alert ("¿Desea agregar algun adicional?");

// let adicionales = prompt ("Panceta - Queso - Cebolla - Pepino").toUpperCase ();

// adicionalesPrecio (adicionales);



// // Arrays




// class Cliente{
//     constructor (nombre,apellido,direccion){
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.direccion = direccion;
//     }
// }

// nuevoCliente = new Cliente(nombre,apellido,direccion);
// agregar ()

// const listaClientes = [];
// listaClientes.push(nuevoCliente.toUpperCase());



