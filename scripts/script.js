var cajaPalindromo = document.getElementById("caja-texto");
var cajaForm = document.getElementById("caja-form");
var cajaLoad = document.getElementById("caja-loading");
var cajaMensaje = document.getElementById("caja-mensaje");
var palabra = document.getElementById("palindromo");
var mensaje = document.getElementById("mensaje");
var valorPalindromo, texto; 


function MostrarResultado(){
	cajaLoad.style.display = "none";
	cajaMensaje.style.display = "block";
	
}
function Reiniciar(){
	cajaPalindromo.value = "";

	cajaMensaje.style.display = "none";
	cajaForm.style.display = "block";
}

function ComprobarPalindromo(){
	
	valorPalindromo = cajaPalindromo.value;

	if (valorPalindromo == "") {
		alert("Debes Agregar una Palabra")
	}else{
	let textoLimpio = valorPalindromo.toLowerCase().replace(/[\W_]/g, "");
	let cantidadLetras = textoLimpio.length;
	let ultimaLetra = textoLimpio.length - 1;
	let verificar = false;

	cajaForm.style.display = "none";
	cajaLoad.style.display = "block";

	setTimeout(MostrarResultado, 1500);

	for (var i = 0; i < ultimaLetra; i++) {
		if (textoLimpio[i] == textoLimpio[ultimaLetra]) {
			verificar = true;
			ultimaLetra --;
		}else{
			verificar = false;
			i++;
		}
		
	}
	if (verificar == true) {
		texto = textoLimpio.toUpperCase();
		palabra.innerHTML = texto;
		mensaje.innerHTML = "Si es un Palíndromo";
	}else{
		texto = textoLimpio.toUpperCase();
		palabra.innerHTML = texto;
		mensaje.innerHTML = "No es un Palindromo";
	}
	}
  
}
