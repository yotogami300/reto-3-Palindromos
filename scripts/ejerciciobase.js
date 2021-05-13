function ComprobarPalindromo(texto){

	let textoLimpio = texto.toLowerCase().replace(/[\W_]/g, "");
	let cantidadLetras = textoLimpio.length;
	let ultimaLetra = textoLimpio.length - 1;
	let verificar = false;

	for (var i = 0; i < ultimaLetra; i++) {
		if (textoLimpio[i] == textoLimpio[ultimaLetra]) {
			verificar = true;
			ultimaLetra --;
		}else{
			verificar = false;
			i++;
		}
		
	}

	return verificar;
  
}

var palindromo = ComprobarPalindromo("almostomla");
console.log(palindromo);