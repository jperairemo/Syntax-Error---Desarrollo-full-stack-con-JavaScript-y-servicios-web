import { usuarios, agregarUsuario, eliminarUsuario } from './datos.js';

// 🟢 Función para mostrar los usuarios en la tabla
function mostrarUsuarios() {
    let tabla = document.getElementById("tablaUsuarios");
    tabla.innerHTML = ""; // Limpiar la tabla antes de mostrar datos

    usuarios.forEach((usuario) => {
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${usuario.nombre}</td>
            <td>${usuario.correo}</td>
            <td>${usuario.password}</td>  <!-- Ahora se muestra la contraseña -->
            <td><button class="borrar-button btn btn-danger" data-correo="${usuario.correo}">Borrar</button></td>
        `;

        tabla.appendChild(fila);
    });

    // Agregar eventos a los botones "Borrar"
    document.querySelectorAll(".borrar-button").forEach(button => {
        button.addEventListener("click", function() {
            let correo = this.getAttribute("data-correo");
            borrarUsuario(correo);
        });
    });
}

// 🟢 Función para borrar un usuario
window.borrarUsuario = function(correo) {
    eliminarUsuario(correo);
    mostrarUsuarios(); // Actualizar la tabla después de borrar
}

// 🟢 Capturar el evento del formulario para agregar un usuario
document.getElementById("formUsuario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar recarga de la página

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let password = document.getElementById("password").value;

    // Agregar el usuario y verificar si fue exitoso
    if (agregarUsuario(nombre, correo, password)) {
        mostrarUsuarios(); // Actualizar la tabla
        this.reset(); // Limpiar el formulario
    }
});

// 🟢 Cargar los usuarios al abrir la página
document.addEventListener("DOMContentLoaded", mostrarUsuarios);
