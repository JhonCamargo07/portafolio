<?php

require_once('validacion.php');
require_once('../model/correo.php');

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: POST");
header("Allow: POST");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);

    $name = limpiarTexto(isset($data['name']) ? $data['name'] : null);
    $email = limpiarTexto(isset($data['email']) ? $data['email'] : null);
    $motive = limpiarTexto(isset($data['motive']) ? $data['motive'] : null);
    $message = limpiarTexto(isset($data['message']) ? $data['message'] : null);
    $destination = limpiarTexto(isset($data['destination']) ? $data['destination'] : null);
    
    if (campoNull($name) || campoNull($email) ||
    campoNull($motive) || campoNull($message) ||
    campoNull($destination)) {
        $response = array("success" => false, "message" => "All fields in the form are required");
        $response['name'] = $name;
        $response['email'] = $email;
        $response['motive'] = $motive;
        $response['message'] = $message;
        $response['destination'] = $destination;
        $response['data'] = $data;
        echo json_encode($response);
        return;
    }
    

    if (!verificarEmail($email)) {
        $response = array("success" => false, "message" => "Email is invalid");
        echo json_encode($response);
        return;
    }

    $instancia = new Correo();
    $guardarMensaje = $instancia->savedEmail($destination, $name, $email, $motive, $message);

    if (!$guardarMensaje) {
        $response = array("success" => false);
        $response["message"] = "A problem has occurred, our site is experiencing errors: $guardarMensaje";
        echo json_encode($response);
        return;
    }

    $response = array("success" => true, "message" => "Message sent successfully");
    echo json_encode($response);


} else {
    $response = array("success" => false);
    $response["message"] = "Unsupported method";
    echo json_encode($response);
}
