<?php
// Recolectar los datos del formulario
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];

// Destinatario
$to = "simon@projeto.cl";

// Asunto
$subject = "Nuevo mensaje de $name";

// Mensaje
$body = "Has recibido un nuevo mensaje de $name.\n\n"."Aquí está el mensaje:\n\n$message";

// Cabeceras
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

// Enviar el correo
mail($to, $subject, $body, $headers);
?>
