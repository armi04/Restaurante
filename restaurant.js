 // Selecciona el enlace de Email
 const enlaceEmail = document.getElementById('enlaceEmail');

 // Asigna un evento de clic al enlace
 enlaceEmail.addEventListener('click', function(event) {
     event.preventDefault(); // Evita que el enlace se comporte por defecto

     // Muestra un cuadro de diálogo para que el usuario ingrese su email
     const email = prompt('Ingrese su email:');

     // Si el usuario ingresa algo
     if (email) {
         // Construimos el enlace mailto dinámicamente
         const mailtoLink = `mailto:${email}`;

         // Redirige al cliente de correo con el mailto generado
         window.location.href = mailtoLink;
     } else {
         alert('Debe ingresar un email válido.');
     }
 });