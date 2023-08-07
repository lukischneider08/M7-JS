cont = 0;

while (cont < 3) {
	var usuario = prompt("Introduzca su nombre de usuario:");
	var clave = prompt("Introduzca su clave:");

	if (usuario == 'admin' && clave == '1234') {
		alert('Los datos ingresados son correctos');
		cont = 0;
		break;
	}



	else {

		if (usuario != 'admin' && clave == '1234') {
			alert('Error!!! Nombre de usuario incorrecto');
		}

		else if (usuario == 'admin' && clave != '1234') {
			alert('Error!!! Clave incorrecta');
		}
		else {
			cont++;
			alert('Error!!! Los datos son incorrectos');
		}

		if (cont == 3) {
			alert('Lo siento, has agotado el número de intentos recarga la pagina');
		}
	}

}


console.log(usuario)
console.log(clave)




function recargarPagina() {

	window.location.reload()
}
