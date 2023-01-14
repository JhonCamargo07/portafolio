<?php

class Correo
{
    private $namePeople;
    private $asunto;
    private $message;
    private $emailPeople;
    private $destination;

    public function savedEmail($destination, $namePeople, $email, $asunto, $message)
    {
        $this->asunto = $asunto;
        $this->namePeople = $namePeople;
        $this->message = $message;
        $this->emailPeople = $email;
        $this->destination = $destination;
        return self::sendEmail();
    }

    private function sendEmail()
    {
        $destinatario = $this->destination;
        $title = $this->asunto;
        $fullMessage = $this->message . "\n\nAtentamente: \n" . $this->namePeople . "\n" . $this->emailPeople;
        $header = "From: " . $this->emailPeople . "\r\n";
        $header .= "X-Mailer: PHP/" . phpversion();
        return @mail($destinatario, $title, $fullMessage, $header);
    }
}
