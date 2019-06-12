<?php
header('Content-Type: application/json');

$llega = $_POST;
//$llega = json_decode(file_get_contents($_POST), true);
//var_dump($llega);

//Seteamos el header de "content-type" como "JSON" para que jQuery lo reconozca como tal

    $datos = array(
        'estado' => 'ok',
        'x' => $llega[posX], //$llega.posX, 
        'y' => $llega[posY], //$llega.posY,
        'valor' => 'responde'
    );    


//Devolvemos el array pasado a JSON como objeto
echo json_encode($datos, JSON_FORCE_OBJECT);