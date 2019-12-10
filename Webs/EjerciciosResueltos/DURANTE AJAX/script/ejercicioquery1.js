/*
    Al hacer click en el boton el texto desaparece,
    todo en el (document).ready para que afecte a todo el HTML
*/

$(document).ready(function () {
    $("[href]").click(function () { //Todos los enlaces
        $('#' + this.id + 1).toggle(700); //Id del texto igual al del enlace +1 para q se ejecuten los cambios

        //Cambiamos el valor del texto al ejecutar el toggle
        if ($(this).html() == "quitar") {
            $(this).html("ver");
        }
        else {
            $(this).html("quitar");
        }
    });
});

