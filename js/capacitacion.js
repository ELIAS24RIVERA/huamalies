// Datos de ejemplo (en un sistema real vendrían de una API)
const capacitaciones = [
    {
        id: 1,
        titulo: "Excelencia en Servicio al Cliente",
        tipo: "calidad",
        fecha: "2023-06-15",
        hora: "10:00",
        duracion: "4 horas",
        modalidad: "Presencial",
        lugar: "Centro de Convenciones Regional",
        instructor: "Ana López - Especialista en Calidad de Servicio",
        cupos: 30,
        cuposDisponibles: 12,
        establecimientosParticipantes: ["Hotel Paraíso", "Hostal Sol", "Restaurante Mar y Tierra"],
        descripcion: "Este taller práctico está diseñado para mejorar las habilidades de atención al cliente en establecimientos turísticos. Los participantes aprenderán técnicas de comunicación efectiva, manejo de quejas y creación de experiencias memorables para los visitantes.",
        estado: "proxima"
    },
    {
        id: 2,
        titulo: "Protocolos de Seguridad para Hoteles",
        tipo: "seguridad",
        fecha: "2023-05-28",
        hora: "09:00",
        duracion: "6 horas (2 sesiones)",
        modalidad: "Virtual",
        lugar: "Plataforma Zoom",
        instructor: "Carlos Mendez - Consultor en Seguridad Turística",
        cupos: 50,
        cuposDisponibles: 0,
        establecimientosParticipantes: ["Hotel Paraíso", "Hotel Montaña", "Residencia Turística", "Albergue Juvenil"],
        descripcion: "Capacitación especializada en protocolos de seguridad para establecimientos de alojamiento turístico. Se cubrirán planes de emergencia, prevención de riesgos y coordinación con autoridades locales.",
        estado: "finalizada"
    },
    {
        id: 3,
        titulo: "Gestión Sostenible de Establecimientos Turísticos",
        tipo: "sostenibilidad",
        fecha: "2023-06-02",
        hora: "14:00",
        duracion: "3 horas",
        modalidad: "Híbrida",
        lugar: "Oficina de Turismo Regional / Microsoft Teams",
        instructor: "Dra. Laura Fernández - Especialista en Turismo Sostenible",
        cupos: 40,
        cuposDisponibles: 8,
        establecimientosParticipantes: ["Hotel Paraíso", "Eco Lodge", "Restaurante Orgánico"],
        descripcion: "Taller sobre implementación de prácticas sostenibles en establecimientos turísticos. Incluye reducción de huella de carbono, manejo de residuos y certificaciones ambientales disponibles.",
        estado: "en-curso"
    }
];

const establecimientos = [
    { id: 1, nombre: "Hotel Paraíso" },
    { id: 2, nombre: "Hostal Sol" },
    { id: 3, nombre: "Restaurante Mar y Tierra" },
    { id: 4, nombre: "Hotel Montaña" },
    { id: 5, nombre: "Eco Lodge" }
];

// Función para formatear fecha
function formatearFecha(fechaStr) {
    const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
    const fecha = new Date(fechaStr);
    return fecha.toLocaleDateString('es-ES', opciones);
}

// Función para cargar las capacitaciones
function cargarCapacitaciones(filtroTipo = 'todos', filtroEstado = 'todos', filtroMes = '') {
    const listaCapacitaciones = document.getElementById('lista-capacitaciones');
    listaCapacitaciones.innerHTML = '';
    
    // Contadores para estadísticas
    let totalAnio = 0;
    let totalEstablecimientos = new Set();
    let proximaCapacitacion = null;
    const ahora = new Date();
    const anioActual = ahora.getFullYear();
    
    // Filtrar capacitaciones
    const capacitacionesFiltradas = capacitaciones.filter(cap => {
        // Aplicar filtros
        const cumpleTipo = filtroTipo === 'todos' || cap.tipo === filtroTipo;
        const cumpleEstado = filtroEstado === 'todos' || cap.estado === filtroEstado;
        
        let cumpleMes = true;
        if(filtroMes) {
            const fechaCap = new Date(cap.fecha);
            const mesCap = fechaCap.getMonth() + 1;
            const anioCap = fechaCap.getFullYear();
            const [anioFiltro, mesFiltro] = filtroMes.split('-');
            cumpleMes = (anioCap.toString() === anioFiltro) && (mesCap.toString() === mesFiltro);
        }
        
        return cumpleTipo && cumpleEstado && cumpleMes;
    });
    
    // Ordenar por fecha (más cercanas primero)
    capacitacionesFiltradas.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    
    // Mostrar capacitaciones filtradas
    capacitacionesFiltradas.forEach(capacitacion => {
        // Actualizar contadores
        const fechaCap = new Date(capacitacion.fecha);
        if(fechaCap.getFullYear() === anioActual) {
            totalAnio++;
        }
        
        capacitacion.establecimientosParticipantes.forEach(est => {
            totalEstablecimientos.add(est);
        });
        
        // Determinar próxima capacitación
        if((!proximaCapacitacion || new Date(capacitacion.fecha) < new Date(proximaCapacitacion.fecha)) && 
           new Date(capacitacion.fecha) >= ahora && capacitacion.estado === 'proxima') {
            proximaCapacitacion = capacitacion;
        }
        
        // Crear tarjeta de capacitación
        const card = document.createElement('div');
        card.className = 'capacitacion-card';
        
        // Determinar clase de estado
        let estadoClass = '';
        let estadoText = '';
        if(capacitacion.estado === 'proxima') {
            estadoClass = 'estado-proxima';
            estadoText = 'Próxima';
        } else if(capacitacion.estado === 'en-curso') {
            estadoClass = 'estado-en-curso';
            estadoText = 'En curso';
        } else {
            estadoClass = 'estado-finalizada';
            estadoText = 'Finalizada';
        }
        
        card.innerHTML = `
            <div class="capacitacion-header">
                <span class="capacitacion-tipo">${capacitacion.tipo.toUpperCase()}</span>
                <span class="capacitacion-fecha">${formatearFecha(capacitacion.fecha)} - ${capacitacion.hora}</span>
            </div>
            <span class="capacitacion-estado ${estadoClass}">${estadoText}</span>
            <div class="capacitacion-body">
                <h3>${capacitacion.titulo}</h3>
                <p><strong>Modalidad:</strong> ${capacitacion.modalidad}</p>
                <p><strong>Lugar:</strong> ${capacitacion.lugar}</p>
                <p>${capacitacion.descripcion.substring(0, 100)}...</p>
                <button class="btn-inscribirse" data-id="${capacitacion.id}" ${capacitacion.estado !== 'proxima' || capacitacion.cuposDisponibles <= 0 ? 'disabled' : ''}>
                    ${capacitacion.estado !== 'proxima' ? 'No disponible' : 
                      capacitacion.cuposDisponibles <= 0 ? 'Sin cupos' : 'Inscribirse'}
                </button>
            </div>
        `;
        
        listaCapacitaciones.appendChild(card);
    });
    
    // Actualizar estadísticas
    document.getElementById('total-capacitaciones-anio').textContent = totalAnio;
    document.getElementById('total-establecimientos-capacitados').textContent = totalEstablecimientos.size;
    
    if(proximaCapacitacion) {
        document.getElementById('proxima-capacitacion').textContent = proximaCapacitacion.titulo;
    } else {
        document.getElementById('proxima-capacitacion').textContent = 'No programada';
    }
    
    // Si no hay resultados
    if(capacitacionesFiltradas.length === 0) {
        listaCapacitaciones.innerHTML = '<p class="no-resultados">No se encontraron capacitaciones con los filtros aplicados.</p>';
    }
    
    // Agregar eventos a los botones de inscripción
    document.querySelectorAll('.btn-inscribirse:not([disabled])').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            mostrarModalInscripcion(id);
        });
    });
}

// Función para mostrar el modal de inscripción
function mostrarModalInscripcion(id) {
    const capacitacion = capacitaciones.find(cap => cap.id === id);
    if(!capacitacion) return;
    
    // Llenar el modal con la información
    document.getElementById('modal-titulo-capacitacion').textContent = capacitacion.titulo;
    document.getElementById('modal-tipo-capacitacion').textContent = capacitacion.tipo;
    document.getElementById('modal-fecha-capacitacion').textContent = `${formatearFecha(capacitacion.fecha)} - ${capacitacion.hora}`;
    document.getElementById('modal-duracion-capacitacion').textContent = capacitacion.duracion;
    document.getElementById('modal-modalidad-capacitacion').textContent = capacitacion.modalidad;
    document.getElementById('modal-lugar-capacitacion').textContent = capacitacion.lugar;
    document.getElementById('modal-instructor-capacitacion').textContent = capacitacion.instructor;
    document.getElementById('modal-cupos-capacitacion').textContent = `${capacitacion.cuposDisponibles} / ${capacitacion.cupos}`;
    document.getElementById('modal-establecimientos-capacitacion').textContent = capacitacion.establecimientosParticipantes.join(', ');
    document.getElementById('modal-descripcion-capacitacion').textContent = capacitacion.descripcion;
    document.getElementById('capacitacion-id').value = capacitacion.id;
    
    // Llenar select de establecimientos
    const selectEstablecimiento = document.getElementById('select-establecimiento');
    selectEstablecimiento.innerHTML = '<option value="">Seleccione un establecimiento</option>';
    
    establecimientos.forEach(est => {
        const option = document.createElement('option');
        option.value = est.id;
        option.textContent = est.nombre;
        selectEstablecimiento.appendChild(option);
    });
    
    // Mostrar el modal
    document.getElementById('modal-capacitacion').style.display = 'block';
}

// Función para manejar la inscripción
function manejarInscripcion(event) {
    event.preventDefault();
    
    const form = event.target;
    const capacitacionId = parseInt(form.capacitacionId.value);
    const establecimientoId = parseInt(form.select-establecimiento.value);
    const participantes = parseInt(form.participantes.value);
    const observaciones = form.observaciones.value;
    
    // Validación
    if(!establecimientoId) {
        alert('Por favor seleccione un establecimiento');
        return;
    }
    
    // En un sistema real, aquí se haría una petición AJAX al servidor
    alert(`Inscripción enviada para ${participantes} participantes del establecimiento seleccionado.`);
    
    // Cerrar modal
    document.getElementById('modal-capacitacion').style.display = 'none';
    form.reset();
    
    // Actualizar lista de capacitaciones
    cargarCapacitaciones();
}

// Función para inicializar la página
function init() {
    // Cargar todas las capacitaciones al inicio
    cargarCapacitaciones();
    
    // Configurar eventos de filtros
    document.getElementById('btn-filtrar-capacitacion').addEventListener('click', function() {
        const tipo = document.getElementById('filtro-tipo-capacitacion').value;
        const estado = document.getElementById('filtro-estado').value;
        const mes = document.getElementById('filtro-mes').value;
        cargarCapacitaciones(tipo, estado, mes);
    });
    
    // Configurar evento para cerrar el modal
    document.querySelector('.cerrar-modal').addEventListener('click', function() {
        document.getElementById('modal-capacitacion').style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('modal-capacitacion');
        if(event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Configurar formulario de inscripción
    document.getElementById('form-inscripcion').addEventListener('submit', manejarInscripcion);
    
    // Establecer mes actual como valor predeterminado
    const ahora = new Date();
    const mesActual = ahora.getFullYear() + '-' + String(ahora.getMonth() + 1).padStart(2, '0');
    document.getElementById('filtro-mes').value = mesActual;
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);