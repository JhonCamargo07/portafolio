<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

require_once('validacion.php');
require_once('../model/correo.php');

// /* ================ Si envian el formulario, entran aquí ================ */
if (isset($_POST)) {
    $name = limpiarTexto($_POST['name']);
    $email = limpiarTexto($_POST['email']);
    $motive = limpiarTexto($_POST['motive']);
    $message = limpiarTexto($_POST['message']);

    // /* === Comprobar si los campos son nulos === */
    if (campoNull($name) || campoNull($email) || campoNull($motive) || campoNull($message)) {
        echo "Complete todos los campos", "Todos los compos en el formulario son requeridos";
    } else {
        // /* === Si los campos no son nulos, se envian los datos a el modelo === */ 
        $instancia = new Correo();
        $guardarMensaje = $instancia->savedEmail($name, $email, $motive, $message);

        /* === Si el message se envia o no, mustra un message según lo que pasó (enviado o no enviado) === */
        if ($guardarMensaje) {
            $response = array("success" => true, "message" => "Message sent successfully");
            echo (json_encode($response));
        } else {
            $response = array("success" => false, "message" => "A problem has occurred, our site is experiencing errors.");
            echo (json_encode($response));
        }
    }
}
