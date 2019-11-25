/*
Introducimos palabras para seleccionar una al azar, segun la palabra que toque se crean las _ en relación
con el numero de letras.
Introducimos una letra y vemos si es correcta, si es repetida (añadiendo las escritas a un nuevo Array) o si no es valida.
En caso de que no sea valida vamos mostrando las imagenes y cuando se muestra la imagen final el juego acaba.
Si el jugador acierta la palabra gana.
*/

//Palabras del juego
var palabras = ["botella", "lanzador", "ordenador", "oso", "codigo"];
//Imagenes (revisar otras opciones)
var img0 = document.getElementById('img0'); img0.style.display = "block"; //Imagen principal
var img1 = document.getElementById('img1');	img1.style.display = "none";
var img2 = document.getElementById('img2'); img2.style.display = "none";
var img3 = document.getElementById('img3'); img3.style.display = "none";
var img4 = document.getElementById('img4'); img4.style.display = "none";
var img5 = document.getElementById('img5'); img5.style.display = "none";
var img6 = document.getElementById('img6'); img6.style.display = "none";
//Imagenes almacenadas
var imagenes = [img0, img1, img2, img3, img4, img5, img6];	

//Contador para realizar la sucesion de imagenes
var contF = 0;

//Calculo de una palabra al azar 
var operaion_elegir_palabra = Math.floor(Math.random() * palabras.length); //devuelve un numero

//Buscamos el indice en el array de las palabras para ver cual hay que resolver
var resolver = palabras[operaion_elegir_palabra]; 
console.log(resolver);

//Asteriscos a completar
var completar = new Array(); 

//Creamos el contador de aciertos
var contA = 0;

//Creamos las palabras escritas
var usadas = new Array();

//Calculamos lo que debemos de mostrar en pantalla
for(i = 0; i < resolver.length; i++){
	completar.push("_");
}
document.getElementById('salida').innerHTML = completar.join(' ');//Mostramos segun la palabra


//Función principal
function letra(letra){
	var letra = letra.toLowerCase();//Para evitar errores de reconocimiento

	//Letra incorrecta
	if(resolver.indexOf(letra) == -1){ //-1 representa que no esta en el array
		alert("Letra incorrecta");
		//Contador para recorrer todas las imagenes
		contF = contF + 1;
		var desap = contF -1; //Valor para que la imagen desaparezca y se sustituya
		console.log(contF + " fallos");

		//Sucesión de imágenes
		imagenes[desap].style.display = "none";
		imagenes[contF].style.display = "block";

		if(img6.style.display == "block"){ //Imagen final visible?? Si:
			document.getElementById('salida').innerHTML = "HAS PERDIDO <br> " + resolver;	
			//Impedimos seguir jugando
			document.getElementById('enviar').style.display = "none";
			document.getElementById('entrada').style.display = "none";
			document.getElementById('body').style.background = "rgb(220, 71, 15)"; //Ponemos color rojizo al perder
		}
	}

	//Evitamos la introduccion de espacios que se cuentan como correctos
	else if(usadas.indexOf(letra) != -1 || letra == false){
		alert("Letra repetida o no disponible");
	}

	//En caso de que pertenezca pasa esto
	else{ //Esto pasa si la palabra introducida esta bien
		//Agregamos la palabra a las usadas
		usadas.push(letra);
		//numeros a sacar y del reves solamente devuelven numeros nada mas
		var num_a_sacar = resolver.indexOf(letra);
		var num_reves = resolver.lastIndexOf(letra);
		contA++;

		//No esta repetida
		if(num_a_sacar == num_reves){
			completar[num_a_sacar] = letra;
			document.getElementById('salida').innerHTML = completar.join(' ');	
		}

		//Si esta repetida
		else{
			//Vemos si el indice es el mismo empezando por el inicio que por el final para poder poner las duplicadas
			//Esto no funciona para palabras como paralelepipedo
			completar[num_a_sacar] = letra;
			completar[num_reves ] = letra;
			document.getElementById('salida').innerHTML = completar.join(' ');
			contA++; //El contador aumenta +2 en las dobles
		}
	}
	console.log(contA + " aciertos");
	if(contA == completar.length){
		document.getElementById('salida').innerHTML = "HAS GANADO <br> " + resolver;
		//Impedimos seguir jugando
		document.getElementById('enviar').style.display = "none";
		document.getElementById('entrada').style.display = "none";
		document.getElementById('body').style.background = "rgb(220, 198, 15)"; //Color dorado al ganar
	}
}