document.addEventListener('DOMContentLoaded', function () {
    const datosGuardados = localStorage.getItem('usuarioRegistrado');

    if (datosGuardados) {
        const usuario = JSON.parse(datosGuardados);

        document.getElementById('name').value = usuario.nombre;
        document.getElementById('dni').value = usuario.dni;
        document.getElementById('phone').value = usuario.telefono;
        document.getElementById('email').value = usuario.email;
        document.getElementById('username').value = usuario.usuario;
        document.getElementById('birthdate').value = usuario.nacimiento;
    } else {
        alert('No se encontraron datos de registro.');
        window.location.href = 'login.html';
    }
});