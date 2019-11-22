//Palabras posibles
var palabras = ["botella", "lanzador", "ordenador", "oso", "codigo"];
//Imagenes revisar otras opciones
var img0 = document.getElementById('img0'); img0.style.display = "block";
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
	completar.push("_")
}
document.getElementById('salida').innerHTML = completar.join(' ')//Mostramos segun la palabra


//Función principal
function letra(letra){
	//Si la letra no es correcta
	var letra = letra.toLowerCase();//Para evitar errores de reconocimiento
	if(resolver.indexOf(letra) == -1){ //-1 representa que no esta en el array
		alert("Letra incorrecta");
		//Contador para recorrer todas las imagenes
		contF = contF + 1;
		var desap = contF -1; //Valor para que la imagen desaparezca y se sustituya
		console.log(contF + " fallos");
		//Creamos el contador de fallos 
		imagenes[desap].style.display = "none";
		imagenes[contF].style.display = "block";
		if(img6.style.display == "block"){
			document.getElementById('salida').innerHTML = "HAS PERDIDO"
			//Impedimos seguir jugando
			document.getElementById('enviar').style.display = "none"
			document.getElementById('entrada').style.display = "none"
			document.getElementById('body').style.background = "rgb(220, 71, 15)"; //Ponemos color rojizo al perder
		}
	}

	//Evitamos la introduccion de espacios que se cuentan como correctos
	else if(usadas.indexOf(letra) != -1 || letra == false){
		alert("Ya has introducido esa letra");
	}

	//En caso de que pertenezca pasa esto
	else{

		//Agregamos la palabra a las usadas
		usadas.push(letra);
		//Vemos la repeticion
		//numeros a sacar y del reves solamente devuelven numeros nada mas
		var num_a_sacar = resolver.indexOf(letra);
		var num_reves = resolver.lastIndexOf(letra);
		contA++;

		//No es repe
		if(num_a_sacar == num_reves){
			completar[num_a_sacar] = letra;
			document.getElementById('salida').innerHTML = completar.join(' ')	
		}

		//Si es repe
		else{
			completar[num_a_sacar] = letra;
			completar[num_reves ] = letra;
			document.getElementById('salida').innerHTML = completar.join(' ')
			contA++; //El contador aumenta +2 en las dobles
		}
	}
	console.log(contA + " aciertos");
	if(contA == completar.length){
		document.getElementById('salida').innerHTML = "HAS GANADO <br> " + resolver;
		//Impedimos seguir jugando
		document.getElementById('enviar').style.display = "none"
		document.getElementById('entrada').style.display = "none"
		document.getElementById('body').style.background = "rgb(220, 198, 15)"; //Color dorado al ganar
	}
}

