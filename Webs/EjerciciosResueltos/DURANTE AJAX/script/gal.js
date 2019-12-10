$(document).ready(function(){
    $(".miniatura").click(function(){
        var imagen = '<img src = "' + this.src + '"class = "img-responsive">'
        $("#salida").html(imagen);
    });

    $(".miniatura").dblclick(function(){
        var imagen = '<img src = "' + this.src + '"class = "img-responsive">'
        $("#imagen_modal").html(imagen);
        $("#myModal").modal();
    });

    $("#login_modal").click(function(){
        $("#myModalLogin").modal(); 
    });
});