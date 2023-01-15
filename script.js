// import smoothscroll from 'smoothscroll-polyfill';

const form = document.getElementById("contact-form");

form.addEventListener("submit", event => {
  event.preventDefault(); // evitar recargar la página al hacer submit
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  // aquí puedes enviar los datos del formulario a un servidor mediante una petición AJAX
  console.log(name, email, message);
});


const backToTopButton = document.getElementById("back-to-top");

// mostrar el boton cuando el usuario scrollea hacia abajo
window.onscroll = function() {
  if (window.pageYOffset > 300) { // si el usuario ha scrolleado mas de 300px
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

// regresar al inicio de la pagina cuando se haga click en el boton
// backToTopButton.onclick = function() {
//   window.scrollTo(0, 0);  
// };


// smoothscroll.polyfill();

// backToTopButton.onclick = function () {
//   window.scroll({
//     top: 0,
//     left: 0,
//     behavior: 'smooth'
//   });
// };


backToTopButton.onclick = function() {
  const scrollStep = -window.scrollY / (500 / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY !== 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
};
