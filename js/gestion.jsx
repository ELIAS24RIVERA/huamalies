// Datos de ejemplo (en un sistema real esto vendría de una API)
let establecimientos = [
    { id: 1, nombre: "Hotel Paraíso", tipo: "Hotel", direccion: "Av. Principal 123", responsable: "Juan Pérez", estado: "Activo" },
    { id: 2, nombre: "Restaurante Sabores", tipo: "Restaurante", direccion: "Calle Comida 456", responsable: "María Gómez", estado: "Activo" }
];

let capacitaciones = [
    { id: 1, establecimiento: "Hotel Paraíso", tema: "Atención al cliente", fecha: "2023-06-15", responsable: "Ana López" }
];

let responsables = [
    { id: 1, nombre: "Juan Pérez", email: "juan@regionz.com", telefono: "555-1234" },
    { id: 2, nombre: "María Gómez", email: "maria@regionz.com", telefono: "555-5678" }
];

// Cargar datos del dashboard
function cargarDashboard() {
    if(document.getElementById('total-establecimientos')) {
        document.getElementById('total-establecimientos').textContent = establecimientos.length;
        document.getElementById('total-capacitaciones').textContent = capacitaciones.length;
        document.getElementById('total-responsables').textContent = responsables.length;

        const activityList = document.getElementById('activity-list');
        activityList.innerHTML = '';
        
        // Últimas 5 capacitaciones
        capacitaciones.slice(0, 5).forEach(cap => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${cap.establecimiento}</strong> - ${cap.tema} (${cap.fecha})`;
            activityList.appendChild(li);
        });
    }
}

// Formulario para registrar nuevo establecimiento
function registrarEstablecimiento(event) {
    event.preventDefault();
    
    const form = event.target;
    const nuevoEstablecimiento = {
        id: establecimientos.length + 1,
        nombre: form.nombre.value,
        tipo: form.tipo.value,
        direccion: form.direccion.value,
        responsable: form.responsable.value,
        estado: "Activo"
    };
    
    establecimientos.push(nuevoEstablecimiento);
    alert("Establecimiento registrado con éxito!");
    form.reset();
    
    // Actualizar dashboard si está visible
    cargarDashboard();
    
    // En un sistema real, aquí haríamos una petición AJAX para guardar en el servidor
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    cargarDashboard();
    
    // Asignar evento al formulario de registro si existe
    const registroForm = document.getElementById('registro-establecimiento-form');
    if(registroForm) {
        registroForm.addEventListener('submit', registrarEstablecimiento);
    }
});