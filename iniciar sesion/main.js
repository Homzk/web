
$(".needs-validation").validate( {
    errorClass: "is-invalid",
    validClass: "is-valid",
    rules: {
        nombreUsuario: {
            required: true,
        },
        
        contraseña: {
            required: true,
            pwcheck: true,
            minlength: 8
        },
    },
    messages: {
        nombreUsuario: {
            required: "El nombre de usuario es requerido",
        },
        
        contraseña: {
            required: "La contraseña es requerida",
            pwcheck: "la contraseña debe tener letras, numeros y al menos una mayuscula",
            minlength: "debe contener 8 caracteres"
        },
    }
});
$.validator.addMethod("pwcheck",
    function(value, element) {
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/.test(value);
});

