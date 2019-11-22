//Palabras entre las que elegir
var palabras = ["zorro", "botella", "pokemon", "oso", "array"];
//Usadas para no repetir la misma palabra varias veces y no agrerar la misma letra cuando ya esta agregada
//Elegimos la palabra a sacar y sacamos su indice del valor del array base
var palabra_elegida = Math.floor(Math.random() * palabras.length);
var palabra_a_completar = palabras[palabra_elegida];
var usadas = new Array();
//Completados para mostrar en pantalla las letras que se han acertado
var completados = new Array();
console.log(palabra_a_completar);


function enviar_palabra(valor){
	//Bucle para jugar hasta que el contador que reresenta los aciertos sea igual que la longitud - 1
	var contador_aciertos = 0;
	while(contador_aciertos < palabra_a_completar.length - 1){
		//Miramos si lo introducido esta dentro de lo que queremos adivinar y miramos si no esta repetido
		if(palabra_a_completar.includes(valor) == true && usadas.includes(valor) == false){
			console.log("bien");
			contador_aciertos++;

			for(i=0; i<=palabra_a_completar.length; i++){
				if(palabra_a_completar[i] == valor) {
					//Añadimso el valor para mostrarlo despues en la pantalla, con las "" para evitar una sucesión de ,
					//document.getElementById('l'+i).innerHTML = completados.join("");
					//document.getElementById('salida').style.display = "block"; 
					document.getElementById('l').innerHTML = '<span id = "l' + i + '"></span';
					completados.push(valor);
					usadas.push(valor);
				}
			}

			
			
			//
			if(completados.length == palabra_a_completar.length){
				alert("tin ti tin, has ganado");
				document.getElementById('salida').innerHTML = completados.join('');
			}
				//console.log(tu_palabra);

				return false;
			}

			else{
				console.log("mal");
			//...
			return false;
		}

	}
}

