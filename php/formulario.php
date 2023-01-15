<?php 

$nombre= $_POST['nombre'];
$correo= $_POST['correo'];
$telefono= $_POST['telefono'];
$asunto= $_POST['asunto'];
$consulta= $_POST['mensaje'];

$header .="Content-type: text/plain";

$mensaje = "Nombre Completo: " . $nombre . ",\r\n";
$mensaje .= "Correo: " . $correo . " \r\n";
$mensaje .= "Telefono: " . $telefono . " \r\n";
$mensaje .= "Asunto: " . $asunto . " \r\n";
$mensaje .= "Consulta: " . $consulta . " \r\n";
$mensaje .= "Fecha:" . date('d/m/Y', time());

$para = "citybellverde2020@gmail.com";
$asunto= "Consulta desde pagina web";

mail( $para, $asunto, utf8_decode($mensaje), $header);

header("Location:exito.html")

?>