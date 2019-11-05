//Función para analizar el número del dni y sacar la letra correspondiente según el resto de dividirlo por 23
function verLetra(dni){
		//Calculo el resto de dividir entre 23
		var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
		var resultado;
		resultado = dni % 23;
		var letra = letras.substring(resultado,resultado+1); //+1 para que pille todas las letras                 
		if(isNaN(dni) || dni == false){
			alert("El dni no es Numérico")
		}

		else{
			document.getElementById("aqui").innerHTML = "La letra del dni es: " + letra;
		}
		

	}