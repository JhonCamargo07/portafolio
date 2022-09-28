<?php
    $titulo = "Portafolio Jhon Camargo";
    include('head.php');
?>
<body>
    <div class="contenedor">
        <?php include('header.php'); ?>
        
        <!--!==============================================================-->
                    <!--!================= Imagen y mensaje de inicio =================-->
        <!--!==============================================================-->
        <section class="parallax" id="contenedor_parallax">
            <div>
                <img src="imagenes/parallax.jpg" alt="" class="parallax__imagen">
            </div>
            <h1 class="parallax__titulo">¡Hola Mundo!</h1>
        </section>

        <!--!==============================================================-->
                    <!--!================= Información sobre mí =================-->
        <!--!==============================================================-->

        <?php include('about.php'); ?>

        <!--!==============================================================-->
                    <!--!================= Hablidades - lenguejes que manejo =================-->
        <!--!==============================================================-->

        <?php include('skills.php'); ?>
        
        <!--!==============================================================-->
        <!--!================= Formulario de contacto =================-->
        <!--!==============================================================-->

        <?php include('contact.php'); ?>

        <!--!==============================================================-->
                    <!--!================= Píe de página =================-->
        <!--!==============================================================-->
        <?php include('footer.php'); ?>

        <!--*=========================== Boton ir a arriba ===========================-->
        <div class="icono icono__subir icono__none" id="icono_subir"><i class="fas fa-chevron-up"></i></div>

    </div>

    <!--*=========================== Traer los archivos js que se requiere ===========================-->
    <?php
        include('filesJS.php');
        include('../controller/correo.php');
    ?>
</body>
</html>