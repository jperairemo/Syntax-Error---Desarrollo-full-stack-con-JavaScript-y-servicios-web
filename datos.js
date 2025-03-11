// Contiene los datos de las interfaces según el punto 10 del enunciado. Maneja la info de usuarios y voluntarios. 

// Lista de usuarios
export let usuarios = [
    { nombre: "SER", correo: "s@e.r", password: "1234" },
    { nombre: "GAM", correo: "g@a.r", password: "4321" }
];

// Lista de voluntariados 
export let voluntariados = [
    { id: 1, titulo: "Se ofrece chica para pasear perro", usuario: "SER", fecha: "2025-02-10", descripcion: "Chica responsable para pasear perros en la zona.", tipo: "Oferta" },
    { id: 2, titulo: "Voluntario para limpieza", usuario: "Juan Pérez", fecha: "2025-03-15", descripcion: "Disponibilidad los fines de semana.", tipo: "Petición" },
    { id: 3, titulo: "Ayuda en oficina", usuario: "Ana Gómez", fecha: "2025-04-01", descripcion: "Ofrece apoyo administrativo.", tipo: "Oferta" }
];

// Función para agregar un nuevo usuario
export function agregarUsuario(nombre, correo, password) {
    const existe = usuarios.some(usuario => usuario.correo === correo);
    // Verificar si el correo ya existe
    if (usuarios.some(u => u.correo === correo)) {
        alert("El correo ya está registrado. Intenta con otro.");
        return false;
    }

    usuarios.push({ nombre, correo, password });
    return true;
}

// Función para eliminar un usuario
export function eliminarUsuario(correo) {
    const index = usuarios.findIndex(u => u.correo === correo);
    if (index !== -1) {
        usuarios.splice(index, 1); // Eliminar el usuario del array
    }
}

// Función para agregar un nuevo voluntariado
export function agregarVoluntariado(titulo, usuario, fecha, descripcion, tipo) {
    let id = voluntariados.length > 0 ? Math.max(...voluntariados.map(v => v.id)) + 1 : 1; 
    voluntariados.push({ id, titulo, usuario, fecha, descripcion, tipo });
}

// Función para eliminar un voluntariado
export function eliminarVoluntariado(id) {
    const index = voluntariados.findIndex(v => v.id === id);
    if (index !== -1) {
        voluntariados.splice(index, 1);  // Eliminar el elemento
    }
}
