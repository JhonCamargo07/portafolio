<?php
    require_once('validacion.php');
    require_once('model/correo.php');

    /* ================ Si envian el formulario, entran aquí ================ */
    if(isset($_POST['enviar'])){
        $nombre = limpiarTexto($_POST['nombre']);
        $correo = limpiarTexto($_POST['correo']);
        $asunto = limpiarTexto($_POST['asunto']);
        $mensaje = limpiarTexto($_POST['mensaje']);

        /* === Comprobar si los campos son nulos === */
        if(campoNull($nombre) || campoNull($correo) || campoNull($asunto) || campoNull($mensaje)){
            echo '<script>
                        alertaFlotante("Complete todos los campos", "Todos los compos en el formulario son requeridos", "#0EA3E3", "imagenes/error.gif");
                        
                    </script>';
        }
        /* === Si los campos no son nulos, se envian los datos a el modelo === */
        else{
            $instancia = new Correo();
            $guardarMensaje = $instancia->savedEmail($nombre, $correo, $asunto,$mensaje);

            /* === Si el mensaje se envia o no, mustra un mensaje según lo que pasó (enviado o no enviado) === */
            if($guardarMensaje){
                echo '<script>
                        alertaFlotanteConRedirecion("Mensaje enviado satisfactoriamente", "El mensaje ya me llegó y de ser necesario, pronto me pondré en contacto contigo", "#76B03D", "imagenes/success.gif", "../");
                        
                    </script>';
            }else{
                echo '<script>
                        alertaFlotanteConRedirecion("Error inesperado", "Ocurrió un probema, nuestro sitio está experimentando fallos", "#0EA3E3", "imagenes/stop.gif", "../");
                        
                    </script>';
            }
        }
    }
?>