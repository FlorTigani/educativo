function validarFormulario() {
    const formulario = document.getElementById("form");
    const camposRequeridos = formulario.querySelectorAll('[required]');
    let todosCompletos = true;
    let text;

    camposRequeridos.forEach(campo => {
        if (!campo.value) {
            todosCompletos = false;
            campo.style.borderColor = 'red'; // Resalta el campo vacío
        } else {
            campo.style.borderColor = ''; // Restablece el color si está completo
        }
    });

    if (todosCompletos) {
        // Si todos los campos requeridos están completos, envía el formulario
       
        /*formulario.submit();*/
        alert("Inscripción exitosa, en breve nos contactaremos");
        window.location.href = 'index.html';
    } else {
        alert('Por favor, completa todos los campos obligatorios.');
    }
   
}


function confirmacion() {
    const formulario = document.getElementById("contacto");
    const camposRequeridos = formulario.querySelectorAll('[required]');
    let todosCompletos = true;
    let text;

    camposRequeridos.forEach(campo => {
        if (!campo.value) {
            todosCompletos = false;
            campo.style.borderColor = 'red'; // Resalta el campo vacío
        } else {
            campo.style.borderColor = ''; // Restablece el color si está completo
        }
    });

    if (todosCompletos) {
        // Si todos los campos requeridos están completos, envía el formulario
       
        /*formulario.submit();*/
        alert("Enviado! En breve le responderemos");
        window.location.href = 'index.html';
    } else {
        alert('Por favor, completa todos los campos obligatorios.');
    }
   
}




