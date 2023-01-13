const form = document.getElementById("contact-form");

form.addEventListener("submit", event => {
  event.preventDefault(); // evitar recargar la página al hacer submit
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  // aquí puedes enviar los datos del formulario a un servidor mediante una petición AJAX
  console.log(name, email, message);
});
