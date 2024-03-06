const formulario = document.querySelector("#formulario");
const nombreInput = document.querySelector("#nombre");
const asuntoInput = document.querySelector("#asunto");
const mensajeInput = document.querySelector("#mensaje");

const errorNombre = document.querySelector(".errorNombre");
const errorAsunto = document.querySelector(".errorAsunto");
const errorMensaje = document.querySelector(".errorMensaje");

// RegEx
const nombreRegex = /^[a-zA-Z\s]+$/;
const asuntoRegex = /^[a-zA-Z\s]+$/;
const mensajeRegex = /^[a-zA-Z0-9\s]+$/;

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const textoNombre = nombreInput.value;
    const textoAsunto = asuntoInput.value;
    const textoMensaje = mensajeInput.value;

    // Limpiar mensajes de error
    errorNombre.innerHTML = "";
    errorAsunto.innerHTML = "";
    errorMensaje.innerHTML = "";

    if (!nombreRegex.test(textoNombre)) {
        errorNombre.innerHTML = "Se debe llenar el campo, no puedes agregar números u otros símbolos";
    }
    if (!asuntoRegex.test(textoAsunto)) {
        errorAsunto.innerHTML = "Se debe llenar el campo, no puedes agregar números u otros símbolos";
    }
    if (!mensajeRegex.test(textoMensaje)) {
        errorMensaje.innerHTML = "El mensaje es requerido";
    }
    if (nombreRegex.test(textoNombre) && asuntoRegex.test(textoAsunto) && mensajeRegex.test(textoMensaje)) {

    }
    if (nombreRegex.test(textoNombre) && asuntoRegex.test(textoAsunto) && mensajeRegex.test(textoMensaje)) {
        // Realizar alguna acción adicional si los campos son válidos
        document.write("Mensaje enviado con exito!")
    }
});
