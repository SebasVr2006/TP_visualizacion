document.querySelector('form').addEventListener('submit', function (event) {
    const datosUsuario = {
        nombre: document.getElementById('name').value,
        dni: document.getElementById('dni').value,
        telefono: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        usuario: document.getElementById('username').value,
        nacimiento: document.getElementById('birthdate').value
    };

    localStorage.setItem('usuarioRegistrado', JSON.stringify(datosUsuario));
});