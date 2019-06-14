<?php
/*Seteamos el header de "content-type" como "JSON" para que JS lo reconozca como tal*/
header("Content-Type: application/json; charset=utf-8");

//var_dump($_POST);
$x = $_POST['posX'];
$y = $_POST['posY'];

$datosRespuesta = array(
    'estado' => 'ok',
    'x' => $x,  
    'y' => $y,
    'valor' => 'responde'
);    

/*Devolvemos el array pasado a JSON como objeto*/
$miJSON = json_encode($datosRespuesta, JSON_FORCE_OBJECT);
echo $miJSON;