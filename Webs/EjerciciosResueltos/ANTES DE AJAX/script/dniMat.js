/*/Función para analizar el número del dni y sacar la letra correspondiente según el resto de dividirlo por 23
function verLetra(dni){
		//Calculo el resto de dividir entre 23
		var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
		var resultado;
		resultado = dni % 23;

		var letra = letras.substring(resultado,resultado+1); //+1 para que pille todas las letras                 
		if(isNaN(dni) || dni == false){
			alert("El dni no es Numérico")
		var letra = letras.substring(resultado,resultado+1); //+1 para que pille todas
		//alert("La letra de tu dni es la " + letra)
		//console.log("La letra es " + letra);
		if(isNaN(dni)){
			alert("El dni no es Numérico");
		}

		else{
			document.getElementById("aqui").innerHTML = "La letra del dni es: " + letra;
		}
		

	}

	*/

	function letra(dni){
		var letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
		var resultado = dni % 23;
		var letra;
		letra = letras[resultado];
		document.getElementById("aqui").innerHTML = "La letra del dni es: " + letra;


	}

	function letrasno(event){/*

		var numeros_validos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

		if(event.which != 0 && event.which != 13){
			var dentro = String.fromCharCode(event.which);
			if(numeros_validos.includes(dentro)){ 
				return true;
			}
			else{
				alert("No valido");
				//document.getElementById("dni").innerHTML = " ";
				return false;
			}
		}

	} */

