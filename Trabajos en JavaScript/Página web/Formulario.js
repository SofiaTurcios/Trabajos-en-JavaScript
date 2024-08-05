//Manejador para el formulario de comentarios
document.getElementById('commentsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe
    const name = document.getElementById('commenterName').value; //Obtiene el valor del nombre
    const email = document.getElementById('commenterEmail').value; //Obtiene el valor del correo electrónico 
    const comment = document.getElementById('comment').value; //Obtiene el valor del campo de texto para el comentario 
    console.log('Nombre:', name); // Muestra en la consola el nombre ingresado
    console.log('Correo electrónico:', email); // Muestra en la consola el correo electrónico ingresado
    console.log('Comentario:', comment); // Muestra en la consola el comentario ingresado
    alert('¡Gracias por tu comentario!'); //Muestra el comentario al enviar el formulario
});

//Manejador para el formulario de encuesta
document.getElementById('interesForm').addEventListener('submit', function(event) {
    event.preventDefault(); //Evita que el formulario se envíe
    if (document.querySelector('input[name="interes"]:checked') && document.querySelector('input[name="contenido"]:checked')) {
        alert('¡Gracias por participar en la encuesta!');
        this.submit(); //Envia el formulario después del alert
    } else {
        alert('Selecciona una de estas opciones'); //Muestra el comentario antes de enviar el formulario
    }
});



document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); //Evita que el formulario se envíe de forma tradicional

    var query = document.querySelector('input[name="q"]').value.trim().toLowerCase(); //obtiene el término de búsqueda
    if (query) {
        var sections = document.querySelectorAll('section'); // Busca todas las secciones en la página
        var foundSection = null; // Variable para almacenar la sección encontrada

        sections.forEach(function(section) { // Recorre todas las secciones para encontrar el término
            if (section.textContent.toLowerCase().includes(query)) {
                foundSection = section;
            }
        });

        if (foundSection) { // Si se encuentra una sección, desplázate a ella
            foundSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert('No se encontró ninguna sección que contenga el término de búsqueda.');
        }
    }
});
