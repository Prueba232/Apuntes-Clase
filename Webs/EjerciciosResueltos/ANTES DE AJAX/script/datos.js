function datos(valor){
	
	var muestra = document.getElementById(valor);
	alert("Nombre: " + muestra.children[0].innerHTML + "\n"  + "Apellidos: " + muestra.children[1].innerHTML + "\n"  + "Telefono: " + muestra.children[2].innerHTML + "\n" + "Email: " + muestra.children[3].innerHTML );
}