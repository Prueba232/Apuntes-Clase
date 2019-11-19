
function comprime(num){

	var suma = 0;
	for(i = 0; i < num.length; i++){
		suma = suma + parseInt(num[i]);	


		/*
			for(i = 0; suma.length != 1; i++){
			var suma_rep = 0
			suma_rep = suma + parseInt(suma[i]);
		}
		*/

		if(suma.length > 1){
			num = suma;
			return suma;
		}
		alert(suma)
	}

	
}