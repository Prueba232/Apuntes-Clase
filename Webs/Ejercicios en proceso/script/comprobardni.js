	function letra(dni){	
		var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
		var resultado = dni.slice(0, 8) % 23; //Se puede hacer tmb con parseInt y con todo el dni introducido
		var letra;
		letra = letras[resultado];

		//document.getElementById("aqui").innerHTML = "La letra del dni es: " + letra;
		if(letra == dni[8].toUpperCase()){ //toUpperCase transforma en mayus al indice final
			document.getElementById("aqui").innerHTML = "El dni es correcto :)";
		}
		else{
			document.getElementById("aqui").innerHTML = "El dni esta mal :( deberia de acabar en " + letra;

		}
	}