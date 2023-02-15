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
        $fullMessage = $this->message . "\n\nAtentamente: \n" . $this->namePeople . "\n" . $this->emailPeople;
        $headers = "From: " . $this->emailPeople . "\r\n";
        $headers .= "Reply-To: " . $this->emailPeople . "\r\n";
        $headers .= "Return-Path:" . $this->destination . "\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/plain; charset=ISO-8859-1\r\n";
        $headers .= "Content-Transfer-Encoding: 7bit\r\n";
        $headers .= "Content-Disposition: inline\r\n";
        $headers .= "X-Mailer: PHP ".phpversion()."\r\n";
        $headers .= "X-Priority: 1\r\n";
        $headers .= "X-MSMail-Priority: High\r\n";
        $headers .= "X-MimeOLE: Produced by PHP/".phpversion()."\r\n";
        $headers .= "X-Originating-IP: ".$_SERVER['SERVER_ADDR']."\r\n";
        $headers .= "X-Authenticated-User: ".$_SERVER['PHP_AUTH_USER']."\r\n";
        $headers .= "X-Spam-Flag: NO\r\n";
        $headers .= "X-Spam-Status: Not Spam\r\n";
        $headers .= "X-Spam-Score: 0\r\n";
        $headers .= "X-Spam-Test: None\r\n";
        return @mail($this->destination, $this->asunto, $fullMessage, $headers);
    }
}
