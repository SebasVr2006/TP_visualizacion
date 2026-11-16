document.addEventListener('DOMContentLoaded', function () {
    const formConsulta = document.querySelector('form');
    const popupOverlay = document.getElementById('popup-overlay');
    const btnAceptar = document.getElementById('btn-aceptar-popup');
    let temporizadorRedireccion;

    function completarEnvio() {
        clearTimeout(temporizadorRedireccion);
        formConsulta.submit();
    }

    formConsulta.addEventListener('submit', function (evento) {
        evento.preventDefault();
        popupOverlay.classList.add('mostrar');
        temporizadorRedireccion = setTimeout(completarEnvio, 5000);
    });

    btnAceptar.addEventListener('click', completarEnvio);
});