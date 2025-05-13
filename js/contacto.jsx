document.getElementById('turismoForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío por defecto

    // Validación básica
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre.trim() === '' || email.trim() === '' || mensaje.trim() === '') {
        alert('Por favor, completa todos los campos obligatorios.');
        return;
    }

    // Simular envío exitoso (en un proyecto real, usarías AJAX o Fetch API)
    const mensajeExito = document.getElementById('mensajeExito');
    mensajeExito.textContent = '✔️ Mensaje enviado correctamente. Nos pondremos en contacto pronto.';
    mensajeExito.style.display = 'block';

    // Resetear formulario después de 3 segundos
    setTimeout(() => {
        this.reset();
        mensajeExito.style.display = 'none';
    }, 3000);
});