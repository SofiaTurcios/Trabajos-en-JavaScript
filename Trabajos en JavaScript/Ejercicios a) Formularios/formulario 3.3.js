const form = document.getElementById('myForm');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name === '' || email ===  message === '') {
        alert('Por favor completa todos los campos.');
    } else {
        //Aquí puedes enviar el formulario o realizar otras acciones
        alert('Formulario enviado exitosamente.');
        form.reset();
    }
});