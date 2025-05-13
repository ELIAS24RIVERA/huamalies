// Datos de ejemplo (en un sistema real vendrían de una API)
const establecimientos = [
    {
        id: 1,
        nombre: "Hotel Paraíso",
        tipo: "hotel",
        direccion: "Av. Principal 123, Zona Centro",
        telefono: "+56 9 1234 5678",
        email: "contacto@hotelparaiso@gmail.com",
        horario: "Check-in: 15:00 / Check-out: 12:00",
        clasificacion: "5 estrellas",
        descripcion: "Hotel de lujo con vista panoramica, piscina climatizada y spa de primer nivel.",
        imagen: "./imag/hotel.jpg",
        web: "https://www.hotelparaiso.cl",
        responsable: "Juan Pérez",
        servicios: ["WiFi", "Piscina", "Spa", "Restaurante", "Estacionamiento"]
    },
    {
        id: 2,
        nombre: "Restaurante El Latino",
        tipo: "restaurante",
        direccion: "jr. central 456, Llata",
        telefono: "+56 9 8765 4321",
        email: "reservas@saboresrlllatino@gmail.com",
        horario: "Lunes a Domingo: 12:00 - 23:00",
        clasificacion: "4.5 estrellas",
        descripcion: "Especializados en mariscos y pescados frescos con recetas tradicionales.",
        imagen: "./imag/restaurante.jpg",
        web: "https://www.saboresdelmar.cl",
        responsable: "María González",
        servicios: ["Terraza", "Menú vegetariano", "Bar de vinos", "Reservas online"]
    },
    {
        id: 3,
        nombre: "Centros Arqueológicos",
        tipo: "tour",
        direccion: "Base Cerro Aventura, Zona Este",
        telefono: "+51 923 555 1234",
        email: "info@aventuraextrema@gemail.com",
        horario: "Salidas diarias a las 8:00 y 14:00",
        clasificacion: "Apto para mayores de 16 años",
        descripcion: "Tour de aventura que incluye rappel, trekking y canopy en el cerro Aventura.",
        imagen: "./imag/arquiologico.jpg",
        web: "https://www.aventuraextrema.cl",
        responsable: "Carlos Rojas",
        servicios: ["Equipo incluido", "Guías certificados", "Fotos del tours", "Transporte"]
    }
];

// Función para cargar los establecimientos en la página
function cargarEstablecimientos(filtroTipo = 'todos', filtroZona = 'todas', textoBusqueda = '') {
    const listaEstablecimientos = document.getElementById('lista-establecimientos');
    listaEstablecimientos.innerHTML = '';

    // Contadores para estadísticas
    let total = 0, hoteles = 0, restaurantes = 0, tours = 0;

    // Filtrar establecimientos
    const establecimientosFiltrados = establecimientos.filter(est => {
        const cumpleTipo = filtroTipo === 'todos' || est.tipo === filtroTipo;
        const cumpleZona = filtroZona === 'todas' || est.direccion.toLowerCase().includes(filtroZona.toLowerCase());
        const cumpleBusqueda = textoBusqueda === '' || 
            est.nombre.toLowerCase().includes(textoBusqueda.toLowerCase()) || 
            est.descripcion.toLowerCase().includes(textoBusqueda.toLowerCase());

        return cumpleTipo && cumpleZona && cumpleBusqueda;
    });

    // Mostrar establecimientos filtrados
    establecimientosFiltrados.forEach(establecimiento => {
        total++;
        if (establecimiento.tipo === 'hotel') hoteles++;
        if (establecimiento.tipo === 'restaurante') restaurantes++;
        if (establecimiento.tipo === 'tour') tours++;

        const card = document.createElement('div');
        card.className = 'establecimiento-card';
        card.innerHTML = `
            <div class="establecimiento-imagen">
                <img src="${imag.imagen}" alt="${imag.nombre}">
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

    // Estadísticas
    document.getElementById('total-establecimientos').textContent = total;
    document.getElementById('total-hoteles').textContent = hoteles;
    document.getElementById('total-restaurantes').textContent = restaurantes;
    document.getElementById('total-tours').textContent = tours;

    // Mensaje si no hay resultados
    if (total === 0) {
        listaEstablecimientos.innerHTML = '<p class="no-resultados">No se encontraron establecimientos con los filtros aplicados.</p>';
    }

    // Eventos de detalle
    document.querySelectorAll('.btn-ver-detalle').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            mostrarDetalleEstablecimiento(id);
        });
    });
}

// Mostrar detalle de un establecimiento en el modal
function mostrarDetalleEstablecimiento(id) {
    const est = establecimientos.find(e => e.id === id);
    if (!est) return;

    document.getElementById('modal-titulo').textContent = est.nombre;
    document.getElementById('modal-tipo').textContent = est.tipo;
    document.getElementById('modal-direccion').textContent = est.direccion;
    document.getElementById('modal-telefono').textContent = est.telefono;
    document.getElementById('modal-email').textContent = est.email;
    document.getElementById('modal-horario').textContent = est.horario;
    document.getElementById('modal-clasificacion').textContent = est.clasificacion;
    document.getElementById('modal-descripcion').textContent = est.descripcion;
    document.getElementById('modal-responsable').textContent = est.responsable;
    document.getElementById('modal-imagen').src = est.imagen;
    document.getElementById('modal-imagen').alt = est.nombre;

    document.getElementById('btn-web').onclick = () => {
        window.open(est.web, '_blank');
    };

    document.getElementById('btn-ruta').onclick = () => {
        alert(`Mostrando ruta a: ${est.direccion}`);
    };

    document.getElementById('detalle-establecimiento-modal').style.display = 'block';
}

// Inicializar la página
function init() {
    cargarEstablecimientos();

    document.getElementById('btn-buscar').addEventListener('click', () => {
        const tipo = document.getElementById('filtro-tipo').value;
        const zona = document.getElementById('filtro-zona').value;
        const busqueda = document.getElementById('filtro-busqueda').value;
        cargarEstablecimientos(tipo, zona, busqueda);
    });

    document.querySelector('.cerrar-modal').addEventListener('click', () => {
        document.getElementById('detalle-establecimiento-modal').style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        const modal = document.getElementById('detalle-establecimiento-modal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Ejecutar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', init);
