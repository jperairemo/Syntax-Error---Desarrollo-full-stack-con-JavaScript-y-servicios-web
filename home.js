import { obtenerVoluntariados } from './datos.js';

// Función para mostrar dinámicamente las tarjetas de voluntariados
function mostrarVoluntariados() {
    let container = document.getElementById("voluntariadosContainer");
    container.innerHTML = ""; // Limpiar antes de cargar

    let voluntariados = obtenerVoluntariados(); // Obtener los voluntariados desde datos.js

    voluntariados.forEach(voluntariado => {
        let card = document.createElement("div");

        // Asignar color según tipo (Oferta o Petición)
        let tipoClase = voluntariado.tipo === "Oferta" ? "card-oferta" : "card-peticion";

        card.classList.add("card", tipoClase); // Ahora sí, después de definir tipoClase

        card.innerHTML = `
            <div class="card-image"></div>
            <h3>${voluntariado.titulo}</h3>
            <p><strong>Usuario:</strong> ${voluntariado.usuario}</p>
            <p><strong>Fecha:</strong> ${voluntariado.fecha}</p>
            <p><strong>Descripción:</strong> ${voluntariado.descripcion}</p>
            <p class="tipo">${voluntariado.tipo}</p>
        `;

        container.appendChild(card);
    });
}

// Cargar los voluntariados al abrir la página
document.addEventListener("DOMContentLoaded", mostrarVoluntariados);

