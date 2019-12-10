
function mostrar_ocultar(texto, enlace){

	//var texto = document.getElementById(texto.id);
	var enlace = document.getElementById(enlace.id);

	if(texto.style.display == "none"){
		enlace.innerHTML = "Ocultar contenido";
		document.getElementById(texto.id).style.display = "block";
	}
	else{
		enlace.innerHTML = "Mostrar contenido";
		document.getElementById(texto.id).style.display = "none";
	}
}



