<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

require_once('validacion.php');
require_once('../model/correo.php');

if (isset($_POST)) {
    $name = limpiarTexto($_POST['name']);
    $email = limpiarTexto($_POST['email']);
    $motive = limpiarTexto($_POST['motive']);
    $message = limpiarTexto($_POST['message']);

    if (campoNull($name) || campoNull($email) || campoNull($motive) || campoNull($message)) {
        $response = array("success" => false, "message" => "All fields in the form are required");
        echo (json_encode($response));
        return;
    }

    if (verificarEmail($email)) {
        $response = array("success" => false, "message" => "Email is invalid");
        echo (json_encode($response));
        return;
    }

    $instancia = new Correo();
    $guardarMensaje = $instancia->savedEmail($name, $email, $motive, $message);

    if ($guardarMensaje) {
        $response = array("success" => true, "message" => "Message sent successfully");
        echo (json_encode($response));
        return;
    } 

    $response = array("success" => false, "message" => "A problem has occurred, our site is experiencing errors.");
    echo (json_encode($response));
}
