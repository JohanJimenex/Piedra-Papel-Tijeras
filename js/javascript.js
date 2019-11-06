//Variables para almacenar los puntos ganados
var ptosJ1 = 0;
var ptosCpu = 0;

//Variables con mensajes para mostrar
var msjGana = "Ganaste!";
var msjPierde = "Perdiste!";
var msjEmpate = "Es un empate!";

var resultado = document.querySelector("#resultado");

//Funcion llamada desde el HTML con el metodo onclick(parametro) pasando como parametro la eleccion predispuesta desde el html
function comparar(eleccionJugador) {

	//Asignacion de un numero aleatorio con el metodo Math.ramdon()
	var eleccionCPU = Math.random();

	if (eleccionCPU < 0.33) {
		eleccionCPU = "Piedra";
	} else if (eleccionCPU < 0.66) {
		eleccionCPU = "Papel";
	} else {
		eleccionCPU = "Tijeras";
	}

	//Muestra elecciones tomadas
	document.getElementById("mostrarUsu").innerHTML = eleccionJugador;
	document.getElementById("mostrarCpu").innerHTML = eleccionCPU;

	//Se realiza la comparacion
	if (eleccionJugador == eleccionCPU) {
		resultado.innerHTML = msjEmpate;

	} else if (eleccionJugador == "Piedra" && eleccionCPU == "Papel") {
		resultado.innerHTML = msjPierde;
		ptosCpu++

	} else if (eleccionJugador == "Piedra" && eleccionCPU == "Tijeras") {
		resultado.innerHTML = msjGana;
		ptosJ1++

	} else if (eleccionJugador == "Papel" && eleccionCPU == "Piedra") {
		resultado.innerHTML = msjGana;
		ptosJ1++

	} else if (eleccionJugador == "Papel" && eleccionCPU == "Tijeras") {
		resultado.innerHTML = msjPierde;
		ptosCpu++

	} else if (eleccionJugador == "Tijeras" && eleccionCPU == "Piedra") {
		resultado.innerHTML = msjPierde;
		ptosCpu++

	} else if (eleccionJugador == "Tijeras" && eleccionCPU == "Papel") {
		resultado.innerHTML = msjGana;
		ptosJ1++

	}

	//Esta funcion es llamada despues de hacer las comparaciones, la misma es para actualizar puntos acumulados en el html
	actualizarTablaPtos();

}

//Esta funcion es llamada despues de hacer las comparaciones, la misma es para actualizar puntos acumulados en el html
function actualizarTablaPtos() {

	document.querySelector("#puntosJugador").innerHTML = ptosJ1;
	document.querySelector("#puntosCPU").innerHTML = ptosCpu;
}

//Funcion que recarga la pagina
function reinicio() {
	location.reload()
}

