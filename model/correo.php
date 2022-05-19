<?php
    require_once('conexion.php');
    
    class Correo{
        private $pdo;
        private $persona;
        private $asunto;
        private $mensaje;
        private $correoRemitente;

        public function __construct(){
            try {
                $this->pdo = Conexion::startUp();
            } catch (Exception $j) {
                echo "Error al conectarse con la base de datos.";
                die($j->getMessage());
            }
        }

        /* === Enviar correo === */
        public function savedEmail($persona, $correo, $asunto, $mensaje){
            $this->asunto = $asunto;
            $this->persona = $persona;
            $this->mensaje = $mensaje;
            $this->correoRemitente = $correo;

            /* === Llamar a las funciones para enviar el correo y guardar el mensaje en la BD, retorna true si logró la acción y false en el caso contrario === */
            if(self::insertEmail() && self::sendEmail()){
                return true;
            }else{
                return false;
            }
        }

        /* === Guardar el mensaje en la BD === */
        private function insertEmail(){
            $insert = $this->pdo->prepare("INSERT INTO correo VALUES (null, :nombre, :correoR, :asunto, :mensaje, now())");
            $insert->bindParam(':nombre', $this->persona);
            $insert->bindParam(':correoR', $this->correoRemitente);
            $insert->bindParam(':asunto', $this->asunto);
            $insert->bindParam(':mensaje', $this->mensaje);
            if($insert->execute()){
                return true;
            }else{
                return false;
            }
        }

        /* === Enviar el mensaje al EMAIL === */
        private function sendEmail(){
            $destinario = 'jhoncamargo07a@gmail.com';
            $titulo = $this->asunto;
            $mensajeCompleto = $this->mensaje . "\n\nAtentamente: \n" . $this->persona . "\n" . $this->correoRemitente;
            $header = "From: " . $this->correoRemitente . "\r\n";
            //$header .= "Reply-to: jhoncamargo07a@gmail.com" . "\r\n";
            $header .= "X-Mailer: PHP/" . phpversion();
            $enviado = @mail($destinario, $titulo, $mensajeCompleto, $header);
            if($enviado){
                return true;
            }else{
                return false;
            }
        }
    }
?>