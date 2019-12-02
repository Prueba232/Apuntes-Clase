var cont = 1; // Varibale ccontador fuera al ser global
//Accedemos al documento
$(document).ready(function () {
    //Imagen siguiente
    $("#next").click(function () {
        if(cont < 4 ){ 
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


