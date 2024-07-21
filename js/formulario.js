document.addEventListener('DOMContentLoaded', function() {
    let button = document.getElementById('enviar');
    button.addEventListener('click', function(event) {
        
        //Validar nombre
        let name = document.getElementById('nombre').value;
        mostrarMensaje(validateName(name), 'nombreError');
        
        //Validar apellido
        let apellido = document.getElementById('apellido').value;
        mostrarMensaje(validateName(apellido), 'apellidoError');
        
        //Validar email
        let email = document.getElementById('email').value;
        mostrarMensaje(validateEmail(email), 'emailError');
    });
    
});

function mostrarMensaje(valueInput, errorId){
    if(!valueInput){
        let errorMessage = document.getElementById(errorId);
        errorMessage.classList.remove('hide');
        errorMessage.classList.add('error-message');
        document.getElementById('myForm').preventDefault();
    }else{
        let errorMessage = document.getElementById(errorId);
        errorMessage.classList.add('hide');
    }

}

function validateName(name) {
    var re = /^[A-Za-z]+$/;
    return re.test(name);
}

function validateEmail(email) {
    var re = /^[^\s@]+@(gmail\.com|hotmail\.com)$/;
    return re.test(email);
}
