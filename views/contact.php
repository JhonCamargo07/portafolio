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