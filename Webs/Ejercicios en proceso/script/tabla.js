function mandaAjax() {
    $('#rta').html('{"nombre":"Pedro","apellidos":"Arnanz Coll","telefono":"652010010","email":"pedro@webmadrideoi.es"};{"nombre":"Samuel","apellidos":"Benítez Díaz","telefono":"652010011","email":"samuel@webmadrideoi.es"};{"nombre":"Francisco Javier","apellidos":"Carrillo Rocha","telefono":"652010012","email":"franciscojavier@webmadrideoi.es"};{"nombre":"Robert Marius","apellidos":"Chirila","telefono":"652010013","email":"robertmarius@webmadrideoi.es"};{"nombre":"Lorena","apellidos":"De Alba Neira","telefono":"652010014","email":"lorena@webmadrideoi.es"};{"nombre":"Sofía","apellidos":"De Cospedal Bercedo","telefono":"652010015","email":"sofía@webmadrideoi.es"};{"nombre":"Beatriz","apellidos":"Díez García","telefono":"652010016","email":"beatriz@webmadrideoi.es"};{"nombre":"Antía","apellidos":"Fernández Fernández","telefono":"652010017","email":"antía@webmadrideoi.es"};{"nombre":"Gabriel","apellidos":"García Rodríguez","telefono":"652010018","email":"gabriel@webmadrideoi.es"};{"nombre":"Fernando","apellidos":"Martín Caro","telefono":"652010020","email":"fernando@webmadrideoi.es"};{"nombre":"Raquel","apellidos":"Martínez Crespo","telefono":"652010021","email":"raquel@webmadrideoi.es"};{"nombre":"Laura","apellidos":"Maya Rufo","telefono":"652010022","email":"laura@webmadrideoi.es"};{"nombre":"Betsy Estefanía","apellidos":"Núñez Arias","telefono":"652010023","email":"betsyestefanía@webmadrideoi.es"};{"nombre":"Thamy","apellidos":"Piacenti Ferreira","telefono":"652010024","email":"thamy@webmadrideoi.es"};{"nombre":"Eloy","apellidos":"Rojano Vargas","telefono":"652010025","email":"eloy@webmadrideoi.es"};{"nombre":"Fabiola","apellidos":"Salguero González","telefono":"652010026","email":"fabiola@webmadrideoi.es"};{"nombre":"Luis Enrique","apellidos":"Yanayaco Salazar","telefono":"652010027","email":"luisenrique@webmadrideoi.es"}');

    var data = $("#rta").html();
    var alumnos = data.split(";"); //Respuesta
    var lista = "";
    //Convertimos a objeto
    for (i = 0; i < alumnos.length; i++) {
        a = JSON.parse(alumnos[i]);
        lista += '<tr><td>' + a.nombre + '</td><td>' + a.apellidos + '</td><td>' + a.telefono + '</td><td>' + a.email + '</td></tr>';
    }
    //Mostramos en pantalla
    $("#procesado").html(lista);
    //Tras cargar todo llamamos a la funcion
    $(document).ready(function(){
        $('#myTable').DataTable();
        $("tbody tr").off('click').on('click', function () {
           // alert("Nombre: " + $(this).children().eq(0).html() + " " + $(this).children().eq(1).html() + "\n Teléfono: " + $(this).children().eq(2).html() + "\n email: " + $(this).children().eq(3).html()); 
            $("#form_modal").click(function(){
                $("#myModal").modal(); 
            });
        });        
    });
}
