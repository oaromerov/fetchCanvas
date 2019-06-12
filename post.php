<?php
/*Seteamos el header de "content-type" como "JSON" para que JS lo reconozca como tal*/

header('Content-Type: application/json);

//var_dump($_POST);

$datosRespuesta = array(
    'estado' => 'ok',
    'x' => $_POST[posX],  
    'y' => $_POST[posY], ,
    'valor' => 'responde'
);    

/*Devolvemos el array pasado a JSON como objeto*/

echo json_encode($datosRespuesta, JSON_FORCE_OBJECT);