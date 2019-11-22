//La ruta nos aporto otro paso natural

function palin(valor){
	var valor = valor.toLowerCase(valor);
 	valor = valor.replace(/\s/g, "");
	console.log(valor);
	var L = valor.length;
	var invert;
	var salida = ""; //Para que se guarden las palabras
	for(i = 0; i < L; i++){
		invert = valor[i]; //El valor lo va guardando delante (lo trata como str no como array), no lo añade detras del valor guardado hola = h = oh = loh... 
		salida = invert + salida;
	}
	if(salida == valor){
		document.getElementById("salida").innerHTML ="Es un palindromo";
	}
	else{
		document.getElementById("salida").innerHTML ="No es un palindromo";
	}
	 
}
