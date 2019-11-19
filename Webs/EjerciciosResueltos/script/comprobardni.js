	function letra(dni){

	
		var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
		var resultado = dni.slice(0, 8) % 23;
		//alert(resultado)
		var letra;
		letra = letras[resultado];
		//document.getElementById("aqui").innerHTML = "La letra del dni es: " + letra;
		if(letra == dni[8]){
			document.getElementById("aqui").innerHTML = "El dni el correcto :)";
		}
		else{
			document.getElementById("aqui").innerHTML = "El dni esta mal :( deberia de acabar en " + letra;

		}
	}