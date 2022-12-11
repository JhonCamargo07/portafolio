<?php
    class Conexion{
        public static function startUp(){
            $pdo = new PDO('mysql:host=localhost; dbname=Jhon_Camargo; charset=utf8', 'root', '');
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $pdo;
        }
    }
?>