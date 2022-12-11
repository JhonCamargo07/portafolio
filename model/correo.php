<?php

class Correo {
    private $pdo;
    private $persona;
    private $asunto;
    private $mensaje;
    private $correoRemitente;

    public function savedEmail($persona, $correo, $asunto, $mensaje)
    {
        $this->asunto = $asunto;
        $this->persona = $persona;
        $this->mensaje = $mensaje;
        $this->correoRemitente = $correo;
        return self::sendEmail();
    }

    private function insertEmailInDB()
    {
        $insert = $this->pdo->prepare("INSERT INTO correo VALUES (null, :nombre, :correoR, :asunto, :mensaje, now())");
        $insert->bindParam(':nombre', $this->persona);
        $insert->bindParam(':correoR', $this->correoRemitente);
        $insert->bindParam(':asunto', $this->asunto);
        $insert->bindParam(':mensaje', $this->mensaje);
        return $insert->execute();
    }

    private function sendEmail()
    {
        $destinario = 'jhoncamargo07a@gmail.com';
        $titulo = $this->asunto;
        $mensajeCompleto = $this->mensaje . "\n\nAtentamente: \n" . $this->persona . "\n" . $this->correoRemitente;
        $header = "From: " . $this->correoRemitente . "\r\n";
        //$header .= "Reply-to: jhoncamargo07a@gmail.com" . "\r\n";
        $header .= "X-Mailer: PHP/" . phpversion();
        $enviado = @mail($destinario, $titulo, $mensajeCompleto, $header);
        return $enviado;
    }
}
