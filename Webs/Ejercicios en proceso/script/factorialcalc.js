//Calculo del factorial
function factorial (numero) {
	var total = 1; 
	if(isNaN(numero)){
		alert("Introduce un numero");
	}
	else{
		for (i=1; i<=numero; i++) {
		total = total * i; //Va guardando los valores porque total vale lo del resultado de la operacion
		document.getElementById("salida").innerHTML = "El resultado es: " + total;
	}
	//return total; no es necesario
}

}


