function validate() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("error_message");

error_message.style.padding = "10px";

var text;
    if(name.length < 5) {
        text = "Por favor escriba un nombre valido";
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length < 10) {
        text = "Por favor escriba un tema correcto";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 9) {
        text = "Por favor escriba un numero valido";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6) {
        text = "Por favor escriba un Email valido";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 100) {
        text = "Por favor escriba mas de 140 caracteres";
        error_message.innerHTML = text;
        return false;
    }
    alert("El formulario ha sido enviado con éxito... Este formulario es de prueba y no envía relamente ningún mensaje a ninguna parte ;) ");
    return true;
}

// envío del formulario
// const $form = document.querySelector('#myform')
// $form.addEventListener('submit', handleSubmit)

// function handleSubmit(event) {
//     event.preventDefault()
//     const form = new FormData(this)
//     console.log(form.get('Name'))
// }