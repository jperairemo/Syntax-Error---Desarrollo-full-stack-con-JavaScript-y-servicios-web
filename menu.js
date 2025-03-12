//Archivo que se utilizará para en caso de que haya un usuario logueado, mostrar su correo.
// Este código se ejecuta en todas las páginas y actualiza el menú automáticamente. Si no hay usuario logueado, el menú seguirá mostrando "Login".



// 🟢 Verificar si hay un usuario logueado y actualizar el menú en todas las páginas
document.addEventListener("DOMContentLoaded", function () {
    let usuarioGuardado = sessionStorage.getItem("usuarioLogueado");

    if (usuarioGuardado) {
        let usuario = JSON.parse(usuarioGuardado);

        // Actualizar menú estándar (home.html, voluntariados.html, etc.)
        let navUsuario = document.getElementById("navUsuario");
        if (navUsuario) {
            navUsuario.innerHTML = `<a href="#">${usuario.correo}</a>`;
        }

        // Actualizar menú en usuarios.html (ícono de usuario)
        let iconoUsuario = document.querySelector(".icono-usuario");
        if (iconoUsuario) {
            iconoUsuario.innerHTML = `<a href="#">${usuario.correo}</a>`;
        }
    }
});
