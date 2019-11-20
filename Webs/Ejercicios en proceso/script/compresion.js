
function comprime(num){
	var suma;
	while(num > 9){
		suma = 0;
		for(i = 0; i < String(num).length; i++){
			suma = suma + parseInt(String(num)[i]);
		}
		if(suma > 9){
			num = suma;
		}
	}
	console.log(suma);
}