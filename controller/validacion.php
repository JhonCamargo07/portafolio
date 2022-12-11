<?php
    function limpiarTexto($elemento){
        $input = ltrim(rtrim($elemento));
        $texto = htmlspecialchars($input);
        return ltrim(rtrim($texto));
    }

    function campoNull($input){
        if($input == null){
            return true;
        }else{
            return false;
        }
    }

    function numCharacters($input, $min, $max){
        if(strlen($input) > $max || strlen($input) < $min){
            return strlen($input);
        }else{
            return false;
        }
    }

    function verificarEmail($mail){
        if(filter_var($mail, FILTER_VALIDATE_EMAIL)){
            return true;
        }else{
            return false;
        }
    }
?>