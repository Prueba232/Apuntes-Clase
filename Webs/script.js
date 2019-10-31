	


function verLetra(dni){
		//Calculo el resto de dividir entre 23
		var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
		var resultado;
		resultado = dni % 23;
		var letra = letras.substring(resultado,resultado+1); //+1 para que pille todas
		//alert("La letra de tu dni es la " + letra)
		//console.log("La letra es " + letra);
		
		switch(dni){
			case typeof dni === "string":
			alert("w");
			break;

			case typeof dni === "number":
			document.getElementById("aqui").innerHTML = "La letra del dni es: " + letra;
			break;

			default:
			alert("error");
			break;

		}

	}