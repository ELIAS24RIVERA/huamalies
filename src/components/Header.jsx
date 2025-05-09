import React from 'react';
import styled from 'styled-components';
// CORRECCIÓN: Cambiar estas rutas por las correctas (ejemplo suponiendo que están en la misma carpeta)
import Filters from './Filters';
import FilterText from './FilterText';

// Estilos generales
const MainContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  color: #333;
`;

const HeroContainer = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
              url('/images/huanuco-bg.jpg') center/cover no-repeat;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.7);
  text-align: center;
  padding: 2rem;
  position: relative;

  @media (max-width: 768px) {
    height: 60vh;
    padding: 1rem;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
    animation: fadeIn 1.5s ease-in-out;
  }

  p {
    font-size: 1.4rem;
    max-width: 700px;
    margin-bottom: 2rem;
    animation: fadeIn 2s ease-in-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const FilterContainer = styled.div`
  padding: 2rem;
  background-color: rgba(247, 247, 247, 0.9);
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 8px;
  max-width: 1000px;
  margin: -50px auto 0;
  position: relative;
  z-index: 10;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #2c3e50;
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      width: 50%;
      height: 3px;
      background: #3498db;
      bottom: -10px;
      left: 25%;
    }
  }
`;

const AttractionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const AttractionCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  div {
    padding: 1.5rem;

    h3 {
      margin-bottom: 0.5rem;
      color: #2c3e50;
    }

    p {
      color: #7f8c8d;
      line-height: 1.6;
    }
  }
`;

const Testimonials = styled.div`
  background: #f8f9fa;
  padding: 4rem 2rem;
  text-align: center;

  .testimonial-container {
    display: flex;
    overflow-x: auto;
    gap: 2rem;
    padding: 1rem 0;
    scroll-snap-type: x mandatory;
  }

  .testimonial {
    min-width: 300px;
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    scroll-snap-align: start;
  }
`;

const Footer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 3rem 2rem;
  text-align: center;

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1000px;
    margin: 0 auto;
    text-align: left;

    div {
      h3 {
        margin-bottom: 1rem;
        font-size: 1.2rem;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin-bottom: 0.5rem;

          a {
            color: #bdc3c7;
            text-decoration: none;
            transition: color 0.3s;

            &:hover {
              color: white;
            }
          }
        }
      }
    }
  }

  .copyright {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #34495e;
  }
`;

// Componente principal
const HomePage = () => {
  const attractions = [
    {
      id: 1,
      name: "Kotosh",
      description: "Templo de las Manos Cruzadas, uno de los sitios arqueológicos más antiguos del Perú.",
      image: "/images/kotosh.jpg"
    },
    {
      id: 2,
      name: "Cordillera Huayhuash",
      description: "Paraíso para los amantes del trekking con paisajes montañosos impresionantes.",
      image: "/images/huayhuash.jpg"
    },
    {
      id: 3,
      name: "Plaza de Armas",
      description: "Corazón de la ciudad con su catedral y arquitectura colonial.",
      image: "/images/plaza-armas.jpg"
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Huánuco me sorprendió con su mezcla de historia y naturaleza. ¡Volveré pronto!",
      author: "María G. - Lima"
    },
    {
      id: 2,
      quote: "La cordillera Huayhuash es simplemente espectacular. Una experiencia inolvidable.",
      author: "Carlos P. - Cusco"
    },
    {
      id: 3,
      quote: "La calidez de su gente y la riqueza cultural hacen de Huánuco un destino único.",
      author: "Lucía M. - Arequipa"
    }
  ];

  return (
    <MainContainer>
      <header>
        <HeroContainer>
          <h1>Descubre Huánuco</h1>
          <p>
            Explora los increíbles paisajes, sitios históricos y la cultura vibrante que hacen de Huánuco un destino inolvidable.
          </p>
          <FilterText />
        </HeroContainer>
        <FilterContainer>
          <Filters />
        </FilterContainer>
      </header>

      <Section>
        <h2>Atractivos Turísticos</h2>
        <AttractionsGrid>
          {attractions.map(attraction => (
            <AttractionCard key={attraction.id}>
              <img src={attraction.image} alt={attraction.name} />
              <div>
                <h3>{attraction.name}</h3>
                <p>{attraction.description}</p>
              </div>
            </AttractionCard>
          ))}
        </AttractionsGrid>
      </Section>

      <Section style={{background: '#f1f5f9'}}>
        <h2>Nuestra Cultura</h2>
        <p style={{maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.1rem'}}>
          Huánuco es una mezcla fascinante de tradiciones ancestrales y modernidad, donde podrás experimentar festivales coloridos, gastronomía única y la calidez de su gente.
        </p>
      </Section>

      <Testimonials>
        <h2>Lo que dicen nuestros visitantes</h2>
        <div className="testimonial-container">
          {testimonials.map(testimonial => (
            <div className="testimonial" key={testimonial.id}>
              <p>"{testimonial.quote}"</p>
              <p><strong>- {testimonial.author}</strong></p>
            </div>
          ))}
        </div>
      </Testimonials>

      <Footer>
        <div className="footer-content">
          <div>
            <h3>Explora Huánuco</h3>
            <ul>
              <li><a href="#">Atractivos turísticos</a></li>
              <li><a href="#">Rutas recomendadas</a></li>
              <li><a href="#">Eventos culturales</a></li>
            </ul>
          </div>
          <div>
            <h3>Información útil</h3>
            <ul>
              <li><a href="#">Cómo llegar</a></li>
              <li><a href="#">Clima y temporadas</a></li>
              <li><a href="#">Consejos para viajeros</a></li>
            </ul>
          </div>
          <div>
            <h3>Contáctanos</h3>
            <ul>
              <li><a href="#">Turismo Huánuco</a></li>
              <li><a href="#">info@turismohuanuco.com</a></li>
              <li><a href="#">+51 999 888 777</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Turismo Huánuco - Todos los derechos reservados
        </div>
      </Footer>
    </MainContainer>
  );
};

export default HomePage;