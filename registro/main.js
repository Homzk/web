import { cargarRegiones } from './js/regiones.js';
import { obtenerComunas } from './js/comunas.js';

$(document).ready(() => {
    cargarRegiones(); 

    const selectRegion = $('#region');
    const selectComuna = $('#comuna');

    
    selectRegion.on('change', function () {
        const regionSeleccionada = $(this).val();
        const comunas = obtenerComunas(regionSeleccionada);

        
        selectComuna.empty();
        selectComuna.append('<option selected disabled>Selecciona una comuna</option>');
        comunas.forEach(comuna => {
            const comunaOption = `<option value="${comuna}">${comuna}</option>`;
            selectComuna.append(comunaOption);
        });
    });



    $(".needs-validation").validate( {
        errorClass: "is-invalid",
        validClass: "is-valid",

        rules: {
            nombreUsuario: {
                required: true,
            },
            rut: {
                required: true,
                rutcheck: true,
            },
            email: {
                required: true,
            },
            region: {
                required: true,
            },
            comuna: {
                required: true,
            },
            contraseña: {
                required: true,
                pwcheck: true,
                minlength: 8
            },
            Ccontraseña: {
                required: true,
                confcheck: true,
            },
            aceptarTerminos: {
                required: true,
            }
        },

        messages: {
            nombreUsuario: {
                required: "El nombre de usuario es requerido",
            },
            rut: {
                required: "El rut es requerido",
                rutcheck: "Ingrese un formato valido para el rut"
            },
            email: {
                required: "E-mail es requerido",
                email: "El formato es incorrecto"
            },
            region: {
                required: "Seleccione una región",
            },
            comuna: {
                required: "Seleccione una comuna",
            },
            contraseña: {
                required: "La contraseña es requerida",
                pwcheck: "la contraseña debe tener letras, numeros y al menos una mayuscula",
                minlength: "debe contener 8 caracteres"
            },
            Ccontraseña: {
                required: "Confirme la contraseña",
                confcheck: "Las contraseñas no coinciden"
            },
            aceptarTerminos: {
                required: "Es necesario aceptar términos  y condiciones",
            }
        }
    });

    $.validator.addMethod("pwcheck",
        function(value, element) {
            return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value);
    });

    $.validator.addMethod("rutcheck", 
        function(rut, element) {
            if (!rut | typeof rut !== 'string') return false;

            var regexp = /^\d{7,8}-[k|K|\d]{1}$/;
            return regexp.test(rut);
        });

    $.validator.addMethod("confcheck",
        function(value, element) {
            
            var contraseña = $("#contraseña").val();
            var confirmacionContraseña = value;

            
            return contraseña === confirmacionContraseña;   
        });
});