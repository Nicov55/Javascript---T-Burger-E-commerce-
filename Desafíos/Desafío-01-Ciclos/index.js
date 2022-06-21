alert ("Sistema de Turnos");


for (let i = 1; i<50; i++) {

    let nombre = prompt ("Ingrese su nombre");
    let apellido = prompt ("Ingrese su apellido");

	while ((nombre=="") || (apellido=="")) {
		alert ("Error: Ingresar Nombre y Apellido"); 
        nombre = prompt ("Ingrese su nombre");
        apellido = prompt ("Ingrese su apellido");
    }
	alert (" Nombre "+ " " + nombre +" - Apellido "+ " " + apellido);
	
    alert (" Turno N° " + i + " " + nombre + " " + apellido);

	if(i === 5)
    {   alert (" Se ha llegado al límite de turnos disponibles en el día, intente nuevamente mañana");
		break;
	}

}


let turno = parseInt (prompt ("Ingrese su N° de turno"));

if (turno > 5) {
    alert ("Su turno no corresponde al día asignado");}

else {};

let horario = prompt ("Ingrese el horario de atención (Mañana - Tarde - Vespertino)").toUpperCase ();

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
        break;
        
}


