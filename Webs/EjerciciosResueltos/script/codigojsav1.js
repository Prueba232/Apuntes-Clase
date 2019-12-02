function separar(correo){
	/*
		Se puede tratar como cadena de texto e ir concatenando para poder añadirlo al string, 
		asi usamos menos espacio
	*/

	//Array donde se almacena el nombre
	var mostrar_nombre = new Array();
	//Array donde se almacena el dominio
	var mostrar_dominio = new Array();
	//Sacamos el indice del @
	var seleccion = correo.indexOf("@");

	//Bucle recorrido nombre
	for(i = 0; i < seleccion; i++){
		var nombre = correo[i];
		mostrar_nombre.push(nombre);
	}
	document.getElementById('nombre').innerHTML = "Nombre: " + mostrar_nombre.join(''); //Array sin espacios ni comas

	//Bucle recorrido dominio
	for(j=seleccion; j < correo.length; j++){ // +1 para no pillar @
		var dominio = correo[j];
		mostrar_dominio.push(dominio);
	}
  
	mostrar_dominio[0] = "(arroba)"; //En caso de string usar replace("viejo", "nuevo");
	document.getElementById('dominio').innerHTML = "Dominio: " + mostrar_dominio.join(''); //Array sin espacios ni comas

}

//Reloj

function fecha(){
	//meses para sacar el correcto
	var meses = ["EN", "FEB", "MAR", "AB", "MAY", "JUN", "JUL", "AG", "SEP", "OCT", "NOV", "DIC"];

	//Obtenemos la fecha y vamos sacando los atributos
	var d = new Date();

	var dia = d.getDate(); // getDay Saca el numero
	document.getElementById('dia').innerHTML = dia;

	//Accedemos al array con el valor del mes (0 al 11)
	var mes = d.getMonth();
	var mes_a_mostrar = meses[mes];
	document.getElementById('mes').innerHTML = mes_a_mostrar;

	var year = d.getFullYear();
	document.getElementById('año').innerHTML = year;

	var hora = d.getHours();
	document.getElementById('hora').innerHTML = hora;

	var min = d.getMinutes();
	document.getElementById('min').innerHTML = min;

	var sec = d.getSeconds();
	if(sec < 10){
		sec = "0"+sec; //El 0 sirve para que no se muestren los segundos menores de diez suelots
	}
	document.getElementById('sec').innerHTML = sec;

}

//Repeticion por sec para mostrar los segundos
var rep = setInterval(fecha, 1000);

//Diferencia entre fechas
function calculo_tiempo(f1, f2){

	//Sacamos las fechas introducidas en milisegundos y calculamos
	var fecha1 = new Date(f1).getTime();
	//console.log(fecha1);

	var fecha2 = new Date(f2).getTime();
	//console.log(fecha2)

	var tiempo = new Date();
	var tiempo = fecha1 - fecha2;
	alert(Date(tiempo).toString());
}