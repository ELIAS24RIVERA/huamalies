// Definimos los datos estáticos que nuestra aplicación utilizará para mostrar destinos turísticos.
// Estos datos podrían provenir de un back-end, pero en este caso utilizamos variables pre-definidas.
// Utilizamos fechas dinámicas para mostrar un rango de fechas entre la fecha actual y el futuro.

const today = new Date();
const tourismDestinationsData = [
  {
    slug: 'machu-picchu',
    name: 'Machu Picchu',
    photo: './images/machu-picchu.jpg',
    description:
      'Machu Picchu es una antigua ciudad inca situada en las montañas de los Andes, en Perú. Es considerada una de las maravillas del mundo moderno y un destino imperdible para los amantes de la historia y la naturaleza.',
    availabilityFrom: today.valueOf(),
    availabilityTo: today.valueOf() + 864000000, // 10 days
    activities: ['Cultural', 'Aventura'],
    city: 'Cusco',
    country: 'Perú',
    price: 5
  },
  {
    slug: 'paracas',
    name: 'Paracas',
    photo: './images/paracas.jpg',
    description:
      'Paracas es una región costera en Perú conocida por sus islas Ballestas y la Reserva Nacional de Paracas, ideales para los amantes de la fauna marina, el ecoturismo y los deportes acuáticos.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    activities: ['Ecoturismo', 'Aventura'],
    city: 'Ica',
    country: 'Perú',
    price: 3
  },
  {
    slug: 'torres-del-paine',
    name: 'Torres del Paine',
    photo: './images/torres-del-paine.jpg',
    description:
      'El Parque Nacional Torres del Paine en Chile es famoso por su impresionante paisaje de montañas, glaciares y lagos. Es un lugar ideal para quienes disfrutan del trekking y el ecoturismo.',
    availabilityFrom: today.valueOf() + 2592000000, // 30 days
    availabilityTo: today.valueOf() + 3456000000, // 40 days
    activities: ['Ecoturismo', 'Aventura'],
    city: 'Puerto Natales',
    country: 'Chile',
    price: 4
  },
  {
    slug: 'patagonia',
    name: 'Patagonia',
    photo: './images/patagonia.jpg',
    description:
      'La región de Patagonia, en Argentina y Chile, es conocida por sus paisajes naturales, su vida silvestre y sus actividades al aire libre, como el senderismo, el avistaje de aves y las expediciones en glaciares.',
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    activities: ['Ecoturismo', 'Aventura'],
    city: 'El Calafate',
    country: 'Argentina',
    price: 4
  },
  {
    slug: 'igazu',
    name: 'Cataratas del Iguazú',
    photo: './images/iguazu.jpg',
    description:
      'Las Cataratas del Iguazú, situadas en la frontera entre Argentina y Brasil, son una de las cascadas más grandes y espectaculares del mundo. Un destino imperdible para los amantes de la naturaleza y la aventura.',
    availabilityFrom: today.valueOf() + 1296000000, // 15 days
    availabilityTo: today.valueOf() + 2592000000, // 30 days
    activities: ['Aventura', 'Ecoturismo'],
    city: 'Puerto Iguazú',
    country: 'Argentina',
    price: 3
  },
  {
    slug: 'bahia',
    name: 'Bahía',
    photo: './images/bahia.jpg',
    description:
      'Bahía, en Brasil, es famosa por sus playas paradisíacas, su cultura vibrante y su gastronomía única. Ideal para quienes buscan una experiencia tropical llena de música y tradición.',
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    activities: ['Cultural', 'Playa'],
    city: 'Salvador',
    country: 'Brasil',
    price: 3
  },
  {
    slug: 'buzios',
    name: 'Búzios',
    photo: './images/buzios.jpg',
    description:
      'Búzios es un encantador pueblo costero en Brasil conocido por sus hermosas playas y su ambiente relajado. Perfecto para disfrutar de deportes acuáticos o simplemente descansar en la playa.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    activities: ['Playa', 'Aventura'],
    city: 'Búzios',
    country: 'Brasil',
    price: 4
  },
  {
    slug: 'machalilla',
    name: 'Parque Nacional Machalilla',
    photo: './images/machalilla.jpg',
    description:
      'El Parque Nacional Machalilla en Ecuador ofrece una gran biodiversidad, con hermosos paisajes costeros y una rica historia cultural. Es ideal para aquellos que buscan una combinación de ecoturismo y turismo cultural.',
    availabilityFrom: today.valueOf() + 432000000, // 5 days
    availabilityTo: today.valueOf() + 1296000000, // 15 days
    activities: ['Ecoturismo', 'Cultural'],
    city: 'Puerto López',
    country: 'Ecuador',
    price: 3
  },
  {
    slug: 'galapagos',
    name: 'Islas Galápagos',
    photo: './images/galapagos.jpg',
    description:
      'Las Islas Galápagos, en Ecuador, son famosas por su fauna única y sus paisajes volcánicos. Es un destino ideal para el ecoturismo, donde los visitantes pueden explorar la vida silvestre y disfrutar de actividades como el buceo.',
    availabilityFrom: today.valueOf() + 864000000, // 10 days
    availabilityTo: today.valueOf() + 1728000000, // 20 days
    activities: ['Ecoturismo', 'Aventura'],
    city: 'Puerto Ayora',
    country: 'Ecuador',
    price: 5
  },
  {
    slug: 'salar-de-uyuni',
    name: 'Salar de Uyuni',
    photo: './images/salar-de-uyuni.jpg',
    description:
      'El Salar de Uyuni en Bolivia es el desierto de sal más grande del mundo y un destino surrealista donde los turistas pueden disfrutar de paisajes increíbles, fotografía, y el observatorio de estrellas más alto del planeta.',
    availabilityFrom: today.valueOf() + 2592000000, // 30 days
    availabilityTo: today.valueOf() + 3456000000, // 40 days
    activities: ['Aventura', 'Ecoturismo'],
    city: 'Uyuni',
    country: 'Bolivia',
    price: 4
  },
];

export default tourismDestinationsData;
