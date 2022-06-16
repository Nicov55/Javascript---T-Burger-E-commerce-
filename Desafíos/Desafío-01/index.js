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
