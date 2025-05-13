// Newsletter Subscription
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    
    // Validación simple
    if(email.includes('@') && email.includes('.')) {
        alert('¡Gracias por suscribirte! Te enviaremos nuestras novedades a ' + email);
        this.reset();
    } else {
        alert('Por favor ingresa un email válido');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile menu toggle (para versión responsive)
function initMobileMenu() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰ Menu';
    document.querySelector('header .container').prepend(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        const nav = document.querySelector('header nav ul');
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
});
function seleccionar(destino) {
  document.getElementById('destino').value = destino;
  document.getElementById('reserva').scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('formularioReserva').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const destino = document.getElementById('destino').value;

  if (nombre && email && destino) {
    const mensaje = `¡Gracias ${nombre}! Tu reserva para ${destino} ha sido registrada. Te contactaremos a ${email}.`;
    document.getElementById('mensaje').textContent = mensaje;
    this.reset();
  } else {
    document.getElementById('mensaje').textContent = 'Por favor completa todos los campos.';
  }
});
