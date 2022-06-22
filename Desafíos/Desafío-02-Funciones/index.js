
let valorEstandar = 2500;

const suma = (a,b) => a + b;
const resta = (a,b) => a - b;
const variablePrecio = valorEstandar => valorEstandar * 0.20;

function turnoPrecio (valorEstandar, variablePrecio, valorTurno) {
        switch (valorTurno) {
            case "AFILIADO":
                return "El precio del turno es de " + (valorEstandar,variablePrecio,resta);
                break;
            case "PARTICULAR":
                return "El precio del turno es de " + (valorEstandar,variablePrecio,suma*2);
                break;
            case "OBRA SOCIAL":
                return "El precio del turno es de" + (valorEstandar,variablePrecio,suma);
                break;
            default:
                return 0;
                break;
                };
            };

function turnoHorario () {
    
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

function pedirDatos () {
  nombre = prompt ("Ingrese su nombre");
  apellido = prompt ("Ingrese su apellido");
}

// INICIO

alert ("Sistema de Turnos");

for (let i = 1; i<50; i++) {

    let nombre = prompt ("Ingrese su nombre");
    let apellido = prompt ("Ingrese su apellido");

	while ((nombre=="") || (apellido=="")) {
        alert ("Error: Ingresar Nombre y Apellido");
        pedirDatos();
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

turnoPrecio ();


let turno = parseInt (prompt ("Ingrese su N° de turno"));

if (turno > 5) {
    alert ("Su turno no corresponde al día asignado");}

else {};

let horario = prompt ("Ingrese el horario de atención (Mañana - Tarde - Vespertino)").toUpperCase ();

turnoHorario ();

