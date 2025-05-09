import React from 'react';
import './RoutesSection.css';


const RoutesSection = () => {
  const recommendedRoutes = [
    {
      id: 1,
      title: "Ruta Histórica",
      description: "Recorre los principales sitios históricos de Huamalíes",
      stops: [
        "Llata (Plaza de Armas)",
        "Iglesia Matriz de Llata",
        "Casa de la Emancipación",
        "Mirador de Cruz Pampa"
      ],
      duration: "4 horas",
      difficulty: "Media"
    },
    {
      id: 2,
      title: "Ruta Natural",
      description: "Explora los paisajes naturales más impresionantes",
      stops: [
        "Catarata de Santa Rosa",
        "Bosque de Piedras de Huaguruncho",
        "Laguna de Carpa",
        "Pampa de Yanahuanca"
      ],
      duration: "8 horas",
      difficulty: "Alta"
    },
    {
      id: 3,
      title: "Ruta Cultural",
      description: "Conoce las tradiciones y artesanías locales",
      stops: [
        "Talleres artesanales de Chavín de Pariarca",
        "Mercado tradicional de Llata",
        "Centro de interpretación cultural",
        "Comunidades campesinas"
      ],
      duration: "5 horas",
      difficulty: "Baja"
    }
  ];

  return (
    <section className="routes-section">
      <h2 className="section-title">Rutas Recomendadas en Huamalíes</h2>
      <p className="section-subtitle">Descubre los mejores recorridos para explorar nuestra provincia</p>
      
      <div className="routes-container">
        {recommendedRoutes.map(route => (
          <div key={route.id} className="route-card">
            <div className="route-header">
              <h3>{route.title}</h3>
              <div className="route-meta">
                <span className="duration">{route.duration}</span>
                <span className={`difficulty ${route.difficulty.toLowerCase()}`}>
                  {route.difficulty}
                </span>
              </div>
            </div>
            <p className="route-description">{route.description}</p>
            
            <div className="route-stops">
              <h4>Puntos del recorrido:</h4>
              <ul>
                {route.stops.map((stop, index) => (
                  <li key={index}>
                    <span className="stop-number">{index + 1}</span>
                    {stop}
                  </li>
                ))}
              </ul>
            </div>
            
            <button className="route-button">Ver mapa de la ruta</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoutesSection;