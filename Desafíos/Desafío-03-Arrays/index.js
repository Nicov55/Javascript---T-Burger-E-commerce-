alert ("Tienda de Hamburguesas")

// ------- Estructura Base ----------

let burgerEstandar = 1000;
	
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const variablePrecio = burgerEstandar * 0.20;

function precioTamaño (burgerEstandar, variablePrecio, burgerTamaño) {
let mensaje = 'Precio';
        switch (burgerTamaño) {
            case "SIMPLE":
                mensaje = "El precio base es de $" + (burgerEstandar);
                break;
            case "DOBLE":
                mensaje = "El precio base es de $" + (suma(burgerEstandar,variablePrecio));
                break;
            case "TRIPLE":
                mensaje = "El precio base es de $" + (suma(burgerEstandar,(variablePrecio*2)));
                break;
            default:
                mensaje = 0;
                break;
                };
			return mensaje;
            
            };
            

function adicionalesPrecio (adicionales) {
    
    switch (adicionales) {
    case "PANCETA":
        alert("Muchas Gracias, el precio final de su pedido es de $ " + (burgerTamaño + 200));
        break;
        
    case "CEBOLLA":
        alert("Muchas Gracias, el precio final de su pedido es de $ " + (burgerTamaño + 150));
        break;

    case "PEPINO":
        alert("Muchas Gracias, el precio final de su pedido es de $ " + (burgerTamaño + 100));
        break;
        
    case "QUESO":
        alert("Muchas Gracias, el precio final de su pedido es de $ " + (burgerTamaño + 200));
        break;

    case "NO":
            alert("Muchas Gracias, el precio final de su pedido es de $ " + burgerTamaño);
            break;

    default:
        alert("Error, vuelva a intentarlo nuevamente");
        adicionales;
        break;
        
}

};

function pedirNombre () {
  return nombre = prompt ("Ingrese su nombre");
};

function pedirApellido () {
  return apellido = prompt ("Ingrese su apellido");
};

function pedirDireccion () {
    return direccion = prompt ("Ingrese su dirección");
  };


// ------- INICIO ---------

alert ("Ingrese sus datos y recibirá su N° de orden");

for (let i = 1; i<50; i++) {

	let nombre = pedirNombre();
	let apellido = pedirApellido();
    let direccion = pedirDireccion();

	while ((nombre=="") || (apellido=="") || (direccion=="")) {
        alert ("Error: Ingresar datos correctamente");
        nombre = pedirNombre();
		apellido = pedirApellido();
        direccion = pedirDireccion();
    }
	
    alert (" Orden N° " + i + " " + nombre + " " + apellido + "-  " + direccion);

	if(i === 5)
    {   alert (" Se ha llegado al límite de ordenes disponibles en el día, intente nuevamente mañana");
		break;
	}

}

let orden = parseInt (prompt ("Ingrese su N° de Orden"));

if (orden > 5) {
    alert ("Su orden no corresponde al día asignado");}

else {orden};

let burgerTamaño = prompt ("Ingrese el tamaño de su Hamburguesa (Simple - Doble - Triple)").toUpperCase ();

let precioBase = parseInt (alert(precioTamaño (burgerEstandar, variablePrecio, burgerTamaño)));

console.log(precioBase);

alert ("¿Desea agregar algun adicional?");

let adicionales = prompt ("Panceta - Queso - Cebolla - Pepino - No").toUpperCase ();

adicionalesPrecio (adicionales);

// ------- ARRAYS ---------

function Cliente (nombre,apellido,direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
    }

let nuevoCliente = new Cliente(nombre,apellido,direccion);
console.log(nuevoCliente);
agregar();

const listaClientes = 0;
listaClientes = [];
function agregar () {
listaClientes.push(nuevoCliente.toUpperCase());
console.log(listaClientes);
}











