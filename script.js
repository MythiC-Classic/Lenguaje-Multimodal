function mostrar(id) {

    // Cerrar cualquier sección que esté abierta
    cerrarTodo();

    // Buscar la sección seleccionada
    const contenido =
        document.getElementById(id);

    // Mostrar la sección
    contenido.style.display = "block";

    // Desplazarse suavemente hasta ella
    contenido.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


function cerrarTodo() {

    // Buscar todas las secciones de contenido
    const contenidos =
        document.querySelectorAll(".contenido");

    // Ocultarlas
    contenidos.forEach(function(contenido) {

        contenido.style.display = "none";

    });

}