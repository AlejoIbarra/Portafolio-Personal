/**
 * Calculate current age
 */
const select = (el) => {
    return document.querySelector(el);
};
const calculateAge = () => {
    // Get the current year
    const year = new Date().getFullYear();

    // Birth year
    const birthYear = 2001;

    // Calculate age
    const age = year - birthYear;

    // Insert the age into the HTML element
    const ageSpan = select('#age');
    if (ageSpan) {
        ageSpan.innerText = age;
    }
};

window.addEventListener('load', calculateAge);


// Función para cambiar el título cuando se produce un evento de cambio de pestaña
let intervalId;

// cambiar el título y desplazarlo de derecha a izquierda
const changeTitle = (newTitle) => {
    clearInterval(intervalId); // Detener el intervalo anterior si existe
    document.title = newTitle;
    // Iniciar un intervalo para desplazar el título
    let pos = 0;
    intervalId = setInterval(() => {
        pos++;
        document.title = newTitle.substring(pos) + newTitle.substring(0, pos);
        if (pos >= newTitle.length) {
            pos = 0;
        }
    }, 200);
};

// Detectar cambios de visibilidad para cambiar el título
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        changeTitle("Im Here att: Alejo "); // Cambiar el título cuando la pestaña está oculta
    } else {
        changeTitle(" Ing. Andres Alejandro Ibarra"); // Restaurar el título cuando la pestaña vuelve a estar visible
    }
});