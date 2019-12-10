<?php require_once('../cons/connect.php'); ?>
<?php
	$condicion = '1';
	if(isset($_POST['id'])){
		$id = $_POST['id'];
		if($id != '')
			$condicion = "id= '$id'";
	}

	$metodo = 'json';
	if(isset($_POST['metodo'])){
		$metodo = $_POST['metodo'];
	}

	$rta='';
	$Recordset1 = $database->query("SELECT * FROM alumnos WHERE $condicion");
		while($row_Recordset1 = $Recordset1->fetch_row()){
			switch($metodo){
				case 'json':
					$rta .= '{"id":"'.$row_Recordset1[0].'","nombre":"'.$row_Recordset1[1].'","apellidos":"'.$row_Recordset1[2].'","telefono":"'.$row_Recordset1[3].'","email":"'.$row_Recordset1[4].'","foto":"'.$row_Recordset1[5].'","descripcion":"'.$row_Recordset1[6].'"};';
					break;
				case 'raw':
					break;
			}
		}
		$rta = substr($rta,0,-1);
		echo $rta;

?>