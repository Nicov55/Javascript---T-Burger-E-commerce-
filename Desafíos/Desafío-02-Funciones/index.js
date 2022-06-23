
let valorEstandar = 2500;

let nombre;
let apellido;
	
const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const variablePrecio = valorEstandar * 0.20;

function turnoPrecio (valorEstandar, variablePrecio, valorTurno) {
let mensaje = 'Precio';
        switch (valorTurno) {
            case "AFILIADO":
                mensaje = "El precio del turno es de " + (resta(valorEstandar,variablePrecio));
                break;
            case "PARTICULAR":
                mensaje = "El precio del turno es de " + (suma(valorEstandar,(variablePrecio*2)));
                break;
            case "OBRA SOCIAL":
                mensaje = "El precio del turno es de " + (suma(valorEstandar,variablePrecio));
                break;
            default:
                mensaje = 0;
                break;
                };
			return mensaje;
            
            };
            

function turnoHorario (horario) {
    
    switch (horario) {
    case "MAÑANA":
        alert("Muchas Gracias, recibira un correo con su turno en el horario de la MAÑANA");
        break;
        
    case "TARDE":
        alert("Muchas Gracias, recibira un correo con su turno en el horario de la TARDE");
        break;

    case "VESPERTINO":
        alert("Muchas Gracias, recibira un correo con su turno en el horario VESPERTINO");
        break;

    default:
        alert("Error, vuelva a intentarlo nuevamente");
        horario;
        break;
        
}

}

function pedirNombre () {
  return nombre = prompt ("Ingrese su nombre");
}

function pedirApellido () {
  return apellido = prompt ("Ingrese su apellido");
}

// INICIO

alert ("Sistema de Turnos");

for (let i = 1; i<50; i++) {

	let nombre = pedirNombre();
	let apellido = pedirApellido();

	while ((nombre=="") || (apellido=="")) {
        alert ("Error: Ingresar Nombre y Apellido");
        nombre = pedirNombre();
		apellido = pedirApellido();
    }

	alert (" Nombre "+ " " + nombre +" - Apellido "+ " " + apellido);
	
    alert (" Turno N° " + i + " " + nombre + " " + apellido);

	if(i === 5)
    {   alert (" Se ha llegado al límite de turnos disponibles en el día, intente nuevamente mañana");
		break;
	}

}

alert ("Ingrese la condición en la que se atiende (Particular - Afiliado - Obra Social");

let valorTurno = prompt ("Condición").toUpperCase ();


alert (turnoPrecio (valorEstandar,variablePrecio,valorTurno));


let turno = parseInt (prompt ("Ingrese su N° de turno"));

if (turno > 5) {
    alert ("Su turno no corresponde al día asignado");}

else {};

let horario = prompt ("Ingrese el horario de atención (Mañana - Tarde - Vespertino)").toUpperCase ();

turnoHorario (horario);