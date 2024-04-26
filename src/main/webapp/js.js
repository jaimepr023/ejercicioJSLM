/**
 * 
 */
var listaEnvios = [];
//La ruta para que escriba en el html
var ruta = document.getElementById("valores");
document.getElementById("cabecera").innerHTML = "USER" + " | " + "COSTES" + " | " + "FECHA ENTRADA" + " | " + "FECHA SALIDA";
var resultado = "";

//Metodo que hace los envios rapidos y lo guarda en el array
function envioR() {
	resultado = "";
	let fecha = new Date();
	let fechaEntrada = new Date(fecha.getFullYear(), fecha.getMonth() + 1, fecha.getDate());
	let fechaSalida = new Date(fecha.getFullYear(), fecha.getMonth() + 1, fecha.getDate() + 5);
	let fechaEntradaString = fechaEntrada.getDate() + "/" + fechaEntrada.getMonth() + "/" + fechaEntrada.getFullYear();
	let fechaSalidaString = fechaSalida.getDate() + "/" + fechaSalida.getMonth() + "/" + fechaSalida.getFullYear();

	let coste = Number(prompt("Dame el coste del producto", 0)) + "€";
	let user = prompt("Dame el nombre del usuario", "aaaaa");
	listaEnvios.push([user, coste, fechaEntradaString, fechaSalidaString]);
	for (let i = 0; i < listaEnvios.length; i++) {
		resultado += listaEnvios[i] + "<br>";
	}
	ruta.innerHTML = resultado;
}

//Funcion para coger los envion y guardarlos 
function envios() {
	resultado = "";
	let fechaString = prompt("Dame la fecha con el siguiente formato dd/MM/yyy", "31/12/9999");
	let arrayStringAux = fechaString.split("/");
	let fecha = new Date(arrayStringAux[2], arrayStringAux[1], arrayStringAux[0]);
	let fechaEntrada = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
	let fechaEntradaString = fechaEntrada.getDate() + "/" + fechaEntrada.getMonth() + "/" + fechaEntrada.getFullYear();
	let fechaSalida = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate() + 5);
	let fechaSalidaString = fechaSalida.getDate() + "/" + fechaSalida.getMonth() + "/" + fechaSalida.getFullYear();

	let coste = Number(prompt("Dame el coste del producto", 0)) + "€";
	let user = prompt("Dame el nombre del usuario", "aaaaa");
	listaEnvios.push([user, coste, fechaEntradaString, fechaSalidaString]);
	for (let i = 0; i < listaEnvios.length; i++) {
		resultado += listaEnvios[i] + "<br>";
	}
	ruta.innerHTML = resultado;
}

//Esta funcion se utiliza para borrar la posicion especifica 
function quitar() {
	resultado = "";
	let nombreEliminar = prompt("Dame el nombre que quieres eliminar", "aaaaa");
	listaEnvios = listaEnvios.filter(function(nombre) {
		if (nombre[0] != nombreEliminar)
			return nombre
	})
	for (let i = 0; i < listaEnvios.length; i++) {
		resultado += listaEnvios[i] + "<br>";
	}
	ruta.innerHTML = resultado;
}

//Funcion que ordena por las fechas y coge la mas recientes y lo muestra por pantalla
function ordenarYSacar() {
	let ultimaSalida;
	for (let i = 0; i < listaEnvios.length - 1; i++) {
		for (let j = 0; j < listaEnvios.length - 1 - i; j++) {
			if (listaEnvios[j][3] > listaEnvios[j + 1][3]) {
				let aux = listaEnvios[j];
				listaEnvios[j] = listaEnvios[j + 1];
				listaEnvios[j + 1] = aux;
			}
		}
	}
	ultimaSalida = "<h1> Ultima salida </h1> " + "<br>" + listaEnvios[0][3] + "<br>" + listaEnvios[0][0] + "<br>" + listaEnvios[0][1];
	ruta.innerHTML = ultimaSalida;

}

