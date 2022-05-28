<?php
    $titulo = "Portafolio Jhon Camargo";
    include('html.php');
?>
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
        <div class="informacion" id="informacion">
            <div class="informacion__parrafos">

                <!--*=========================== Sobre mí ===========================-->
                <h1 class="informacion__titulo" id="sobre_mi">Sobre mí</h1>
                <div class="informacion__primer--parrafo">
                    <div class="informacion__principal">
                        <p>Soy Jhon Camargo, la persona que se esconde trás estas líneas y pertenezco a esa generación que es llamada centennials.</p>
                        
                        <p>Crecí en un mundo en donde la tecnología innovaba cada día, ví como cambiamos del celular de teclas al Smartphone, ví como cada vez la tecnología estaba más presente en nuestro día a día. Hasta el día de hoy, que todo se mueve a partir de ella. Me alegra poder ser parte de esta era y contribuir poco a poco con mi conocimiento.</p>
                    </div>

                    <!--!==============================================================-->
                                <!--!================= Imagen =================-->
                    <!--!==============================================================-->
                    <div class="informacion__imagen">
                        <img src="imagenes/foto.jpeg" loading="lazy" alt="Jhon Camargo, Programador" class="informacion__img">
                    </div>
                </div>

                <!--*=========================== Sobre mi en lo personal ===========================-->
                <h2 class="informacion__subtitulo">En lo personal...</h2>
                <p>
                    Soy una persona tranquila, me gusta hacer deporte, algunos fines de semana salgo a trotar un rato. Me gusta escuchar música y más que solo escucharla, me gusta analizar las letras de cada canción. Me llama mucho la atención escuchar historias del pasado, anécdotas y mas aun si son llevadas a películas o series. 
                </p>

                <p>
                    Aunque no leo mucho, estoy empezando a cultivar en mi el habito de leer. Me interesa un poco la política y aunque no sé mucho al respecto considero que esta debe estar en cada persona porque no hay nada más importante que elegir correctamente a las personas que liderarán el país.
                </p>

                <!--*=========================== Sobre mí en lo profesional ===========================-->
                <h2 class="informacion__subtitulo">En lo profesional...</h2>
                <p>
                    Actualmente me encuentro haciendo un tecnólogo en el centro de formación Sena, pero mis metas de estudio no llegan hasta aquí, quiero hacer una especialización en ingenieria de sistemas. 
                </p>

                <p>
                    Durante mi aprendizaje he desarrollado distintos proyectos que me han servido como práctica y me han dado cierta experiencia en este ámbito. Mi lenguaje fuerte en el momento es php, en este he hecho distintos tipos de prácticas y puedo arreglar rápidamente los problemas que surjan. Pero esto no quiere decir que no esté dispuesto a aprender más lenguajes, de hecho, me encantaría poder aprender tantas cosas de cada lenguaje y así mejorar mi conocimiento. Mientras tanto, iré aprendiendo poco a poco.
                </p>

                <p>
                    Aunque no cuento con un título en reparación de computadores, mi curiosidad me ha llevado a aprender muchas cosas en la parte del hardware, yo mismo he aprendido como hacerle mantemiento y reparaciones a los computadores. Recuerdo que desde niño me ha gustado todo lo relacionado con software y hardware.
                </p>

            </div>
        </div>

        <!--!==============================================================-->
                    <!--!================= Hablidades - lenguejes que manejo =================-->
        <!--!==============================================================-->
        <div class="habilidades" id="habilidades">
            <h1 class="formulario__titulo informacion__titulo">Habilidades</h1>
            <!--*=========================== Imagenes de los lenguajes ===========================-->
            <div class="habilidades__imagenes">
                <img class="habilidades__img" loading="lazy" src="imagenes/html.png" alt="Lenguaje html">
                <img class="habilidades__img" loading="lazy" src="imagenes/css.png" alt="Lenguaje css">
                <img class="habilidades__img" loading="lazy" src="imagenes/javascript.png" alt="Lenguaje javascript">
                <img class="habilidades__img" loading="lazy" src="imagenes/php.png" alt="Lenguaje php">
                <img class="habilidades__img" loading="lazy" src="imagenes/java.png" alt="Lenguaje java">
                <img class="habilidades__img" loading="lazy" src="imagenes/MySQL.png" alt="Lenguaje MySQL">
                <img class="habilidades__img" loading="lazy" src="imagenes/git.png" alt="Software de versionamiento">
                <img class="habilidades__img" loading="lazy" src="imagenes/sql.png" alt="Lenguaje sql">
                <img class="habilidades__img" loading="lazy" src="imagenes/github.png" alt="Controlador de versiones">
            </div>
        </div>

        <!-- <div class="parrafolenguajes">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p>Tempora similique magnam reprehenderit! Est, quibusdam enim!</p>
            <p>Ipsum debitis voluptas officiis quo nisi molestiae?</p>
            <p>Facere soluta quam, laudantium enim quas veniam!</p>
            <p>Temporibus laborum unde quidem voluptatum nihil minus!</p>
        </div> -->

        <!--!==============================================================-->
                    <!--!================= Formulario de contacto =================-->
        <!--!==============================================================-->
        <div class="formulario" id="contacto">
            <h1 class="formulario__titulo informacion__titulo">Contáctame</h1>
            <!--*=========================== Inicio formulario ===========================-->
            <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST" name="formulario" class="formulario__form" id="formulario">

                <!-- Grupo nombre -->
                <div class="formulario__grupo" id="grupo__nombre">
                    <label for="nombre" class="formulario__label">Nombre <span class="required">*</span></label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" id="nombre" name="nombre" placeholder="John Doe" title="Solo se aceptan letras" >
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El nombre debe ser de 7 a 60 caracteres, solo puede contener letras y no puede estar vacío</p>
                </div>
                
                <!-- Grupo correo -->
                <div class="formulario__grupo" id="grupo__correo">
                    <label for="correo" class="formulario__label">Correo Electrónico <span class="required">*</span></label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" id="correo" name="correo" placeholder="correo@correo.com" title="Escribe un correo electronico valida para poder contactarme contigo">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El correo solo puede contener letras, números, puntos, guiones, guion bajo, debe ser un correo valido y no puede estar vacío</p>
                </div>
                
                <!-- Grupo asunto -->
                <div class="formulario__grupo" id="grupo__asunto">
                    <label for="asunto" class="formulario__label">Asunto <span class="required">*</span></label>
                    <div class="formulario__grupo-input">
                        <input type="text" class="formulario__input" id="asunto" name="asunto" placeholder="Solicutud de tus servicios" title="Escribe el titulo o una breve descripción de tu mensaje">
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El asunto debe ser de 10 a 100 caracteres, solo puede contener letras, números, puntos, guiones, guion bajo y no puede estar vacío</p>
                </div>
                
                <!-- Grupo mensaje -->
                <div class="formulario__grupo" id="grupo__mensaje">
                    <label for="mensaje" class="formulario__label">Mensaje <span class="required">*</span></label>
                    <div class="formulario__grupo-input">
                        <textarea name="mensaje" class="formulario__textarea" id="mensaje"  rows="5" name="mensaje" placeholder="Cuentame cual es el motivo por el que me contactas" title="Describe tu mensaje..."></textarea>
                        <i class="formulario__validacion-estado fas fa-times-circle"></i>
                    </div>
                    <p class="formulario__input-error">El mensaje debe minimo 10 caracteres, solo puede contener letras, números, puntos, guiones, guion bajo y no puede estar vacío</p>
                </div>

                <div class="formulario__mensaje" id="formulario__mensaje">
                    <p><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario correctamente</p>
                </div>
                
                <!-- Grupo boton -->
                <div class="formulario__grupo formulario__grupo-btn-enviar">
                    <button type="submit" name="enviar" class="formulario__btn">Enviar</button>
                    <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
                </div>

            </form>
                
        </div>

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
        include('fin-html.php');
        include('../controller/correo.php');
    ?>