// Datos de ejemplo (en un sistema real vendrían de una API)
const establecimientos = [
    {
        id: 1,
        nombre: "Hotel Paraíso",
        tipo: "hotel",
        direccion: "Av. Principal 123, Zona Centro",
        telefono: "+56 9 1234 5678",
        email: "contacto@hotelparaiso.cl",
        horario: "Check-in: 15:00 / Check-out: 12:00",
        clasificacion: "5 estrellas",
        descripcion: "Hotel de lujo con vista al mar, piscina climatizada y spa de primer nivel.",
        imagen: "img/establecimientos/hotel-paraiso.jpg",
        web: "https://www.hotelparaiso.cl",
        responsable: "Juan Pérez",
        servicios: ["WiFi", "Piscina", "Spa", "Restaurante", "Estacionamiento"]
    },
    {
        id: 2,
        nombre: "Restaurante Sabores del Mar",
        tipo: "restaurante",
        direccion: "Costa Brava 456, Zona Norte",
        telefono: "+56 9 8765 4321",
        email: "reservas@saboresdelmar.cl",
        horario: "Lunes a Domingo: 12:00 - 23:00",
        clasificacion: "4.5 estrellas",
        descripcion: "Especializados en mariscos y pescados frescos con recetas tradicionales.",
        imagen: "img/establecimientos/restaurante-sabores.jpg",
        web: "https://www.saboresdelmar.cl",
        responsable: "María González",
        servicios: ["Terraza", "Menú vegetariano", "Bar de vinos", "Reservas online"]
    },
    {
        id: 3,
        nombre: "Tour Aventura Extrema",
        tipo: "tour",
        direccion: "Base Cerro Aventura, Zona Este",
        telefono: "+56 9 5555 1234",
        email: "info@aventuraextrema.cl",
        horario: "Salidas diarias a las 8:00 y 14:00",
        clasificacion: "Apto para mayores de 16 años",
        descripcion: "Tour de aventura que incluye rappel, trekking y canopy en el cerro Aventura.",
        imagen: "img/establecimientos/tour-aventura.jpg",
        web: "https://www.aventuraextrema.cl",
        responsable: "Carlos Rojas",
        servicios: ["Equipo incluido", "Guías certificados", "Fotos del tour", "Transporte"]
    }
];

// Función para cargar los establecimientos en la página
function cargarEstablecimientos(filtroTipo = 'todos', filtroZona = 'todas', textoBusqueda = '') {
    const listaEstablecimientos = document.getElementById('lista-establecimientos');
    listaEstablecimientos.innerHTML = '';
    
    // Contadores para estadísticas
    let total = 0;
    let hoteles = 0;
    let restaurantes = 0;
    let tours = 0;
    
    // Filtrar establecimientos
    const establecimientosFiltrados = establecimientos.filter(est => {
        // Aplicar filtros
        const cumpleTipo = filtroTipo === 'todos' || est.tipo === filtroTipo;
        const cumpleZona = filtroZona === 'todas' || est.direccion.toLowerCase().includes(filtroZona);
        const cumpleBusqueda = textoBusqueda === '' || 
                              est.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()) || 
                              est.descripcion.toLowerCase().includes(textoBusqueda.toLowerCase());
        
        return cumpleTipo && cumpleZona && cumpleBusqueda;
    });
    
    // Mostrar establecimientos filtrados
    establecimientosFiltrados.forEach(establecimiento => {
        // Actualizar contadores
        total++;
        if(establecimiento.tipo === 'hotel') hoteles++;
        if(establecimiento.tipo === 'restaurante') restaurantes++;
        if(establecimiento.tipo === 'tour') tours++;
        
        // Crear tarjeta del establecimiento
        const card = document.createElement('div');
        card.className = 'establecimiento-card';
        card.innerHTML = `
            <div class="establecimiento-imagen">
                <img src="${establecimiento.imagen}" alt="${establecimiento.nombre}">
            </div>
            <div class="establecimiento-info">
                <span class="establecimiento-tipo">${establecimiento.tipo.toUpperCase()}</span>
                <h3>${establecimiento.nombre}</h3>
                <p><strong>Dirección:</strong> ${establecimiento.direccion}</p>
                <p><strong>Horario:</strong> ${establecimiento.horario}</p>
                <p>${establecimiento.descripcion.substring(0, 100)}...</p>
                <button class="btn-ver-detalle" data-id="${establecimiento.id}">Ver detalles</button>
            </div>
        `;
        
        listaEstablecimientos.appendChild(card);
    });
    
    // Actualizar estadísticas
    document.getElementById('total-establecimientos').textContent = total;
    document.getElementById('total-hoteles').textContent = hoteles;
    document.getElementById('total-restaurantes').textContent = restaurantes;
    document.getElementById('total-tours').textContent = tours;
    
    // Si no hay resultados
    if(total === 0) {
        listaEstablecimientos.innerHTML = '<p class="no-resultados">No se encontraron establecimientos con los filtros aplicados.</p>';
    }
    
    // Agregar eventos a los botones de detalle
    document.querySelectorAll('.btn-ver-detalle').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            mostrarDetalleEstablecimiento(id);
        });
    });
}

// Función para mostrar el detalle de un establecimiento en el modal
function mostrarDetalleEstablecimiento(id) {
    const establecimiento = establecimientos.find(est => est.id === id);
    if(!establecimiento) return;
    
    // Llenar el modal con la información
    document.getElementById('modal-titulo').textContent = establecimiento.nombre;
    document.getElementById('modal-tipo').textContent = establecimiento.tipo;
    document.getElementById('modal-direccion').textContent = establecimiento.direccion;
    document.getElementById('modal-telefono').textContent = establecimiento.telefono;
    document.getElementById('modal-email').textContent = establecimiento.email;
    document.getElementById('modal-horario').textContent = establecimiento.horario;
    document.getElementById('modal-clasificacion').textContent = establecimiento.clasificacion;
    document.getElementById('modal-descripcion').textContent = establecimiento.descripcion;
    document.getElementById('modal-responsable').textContent = establecimiento.responsable;
    document.getElementById('modal-imagen').src = establecimiento.imagen;
    document.getElementById('modal-imagen').alt = establecimiento.nombre;
    
    // Configurar botones
    document.getElementById('btn-web').onclick = function() {
        window.open(establecimiento.web, '_blank');
    };
    
    document.getElementById('btn-ruta').onclick = function() {
        // En un sistema real, esto abriría Google Maps con la dirección
        alert(`Mostrando ruta a: ${establecimiento.direccion}`);
    };
    
    // Mostrar el modal
    document.getElementById('detalle-establecimiento-modal').style.display = 'block';
}

// Función para inicializar la página
function init() {
    // Cargar todos los establecimientos al inicio
    cargarEstablecimientos();
    
    // Configurar eventos de filtros
    document.getElementById('btn-buscar').addEventListener('click', function() {
        const tipo = document.getElementById('filtro-tipo').value;
        const zona = document.getElementById('filtro-zona').value;
        const busqueda = document.getElementById('filtro-busqueda').value;
        cargarEstablecimientos(tipo, zona, busqueda);
    });
    
    // Configurar evento para cerrar el modal
    document.querySelector('.cerrar-modal').addEventListener('click', function() {
        document.getElementById('detalle-establecimiento-modal').style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('detalle-establecimiento-modal');
        if(event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);