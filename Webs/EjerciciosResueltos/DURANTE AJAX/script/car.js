/*
var cont = 1; // Varibale ccontador fuera al ser global
//Accedemos al documento
$(document).ready(function () {
    //Imagen siguiente
    $("#next").click(function () {
        if(cont < 4){ 
            $("#" + cont++).hide(); //Ocultamos una a una cada imagen
            console.log(cont)   
            
        }
    });
    
    //Imagen anterior
    $("#prev").click(function(){
        $("#" + --cont).show(); //Bajamos 1 para ir haciendo visibles los que habíamos ocultados
        if(cont <= 0){
            ++cont //Para que no sea 0 y no tengamos que dar dos clicks
        }
        console.log(cont) 
    })
});
*/

var i = 1;
$(document).ready(function () {
    //Sacamos todas las fotos
    var x = $("ul").find("li");
    console.log(x.length + " (imagenes)")
    $("#next").click(function () {
        //Pasamos las fotos
        if (i < x.length) {
            $("#" + i++).hide();
        }
        //Volvemos al inicio al acabar
        else if (i = x.length) {
            $("ul").find("*").show();
            i = 1;
        }
        console.log(i + " next");
    });
    //Boton para atras
    $("#prev").click(function (){
        if(i > 0){
            $("#" + --i).show();
            if( i < 1){
                i = x.length;
                $("#" + i--).show();
            }
        }
        
     
        console.log(i + " previous")
    });
    
});