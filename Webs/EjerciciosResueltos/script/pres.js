//Metemos las variables para prodecer con los calculos
var cap = prompt("Introduce el préstamo a devolver");
var n = prompt("En cuantos años quieres pagar el préstamo?");
var porcentaje = prompt("Con que interes?");
var cuotas = prompt("En cuantas cuotas quieres pagar el prestamos?")
//Calculamos el porcentaje en forma decimal
var i = porcentaje / 100;
//Calculamos el pago de las cuotas
var cuota = Math.floor((cap * i)/(1-(1+i)**-n)); //Pago en total de esos años (sin cuotas por años)
//Segun las que coutas que quiera, se dice cuanto se paga en cada una
var cuota_por_año = Math.floor(cuota / cuotas);

console.log("Tienes que pagar " + cuota + " en " + n + " años con " + cuota_por_año + " euros cada cuota (total: " + cuotas + " cuotas)"); 

for(i = 0; i < cuota; i++){
	var tabla = document.createElement('table');
	var fila = document.createElement('tr');

}



//Crear tablas segun cuotas en un for con document.createElement('table');