function comprime(num){
	suma = num;
	while(suma > 9){
		var L = String(num).length; //String para poder tener el length
		suma = 0;
		for(i = 0; i < L; i++){
			suma += parseInt(String(num)[i]); //parseInt asecas  no funciona porq el numero no tiene length
		}

		if(suma > 9){
			num = suma
		}
	}
	document.getElementById("aqui").innerHTML = "El resultado de la compresión es: " + suma;
	
}
