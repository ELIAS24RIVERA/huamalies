import React, { useState } from 'react';
import styled from 'styled-components';
import Filters from './Filters';
import FilterText from './FilterText';
import 'bootstrap/dist/css/bootstrap.min.css';

// ------------------ ESTILOS ------------------

const MainContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  max-width: 1400px;
  margin: 0 auto;
  color: #333;
  background: #f0f2f5;
`;

const HeroContainer = styled.section`
  background: url('/imag/llata.jpg') center/cover no-repeat;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-shadow: 2px 2px 6px rgba(0,0,0,0.8);
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    height: 60vh;
    padding: 1rem;
  }

  h1 {
    font-size: 3.8rem;
    margin-bottom: 1rem;
    font-weight: 800;
    animation: fadeIn 1.5s ease-in-out;
  }

  p {
    font-size: 1.6rem;
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
  padding: 2.5rem;
  background: linear-gradient(135deg, #7d88ee, #6a75e0);
  color: white;
  text-align: center;
  box-shadow: 0 6px 16px rgba(0,0,0,0.2);
  border-radius: 12px;
  max-width: 1000px;
  margin: -60px auto 0;
  position: relative;
  z-index: 10;
`;

const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background: #fff;

  h2 {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    color: #2c3e50;
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      width: 60%;
      height: 4px;
      background: #3498db;
      bottom: -12px;
      left: 20%;
      border-radius: 2px;
    }
  }
`;

const ToggleButton = styled.button`
  background: #3498db;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #2980b9;
  }
`;

const AttractionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 2rem;
`;

const AttractionCard = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  }

  img {
    width: 100%;
    height: 220px;
    object-fit: cover;
  }

  div {
    padding: 1.5rem;

    h3 {
      margin-bottom: 0.8rem;
      color: #2c3e50;
      font-size: 1.4rem;
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

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #2c3e50;
  }

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
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    scroll-snap-align: start;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Footer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 3.5rem 2rem;
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
        font-size: 1.3rem;
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
              color: #fff;
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
    font-size: 0.9rem;
    color: #95a5a6;
  }
`;

// ------------------ COMPONENTES ------------------

const TourismAttractions = ({ attractions }) => {
  const [showAttractions, setShowAttractions] = useState(false);

  return (
    <Section>
      <ToggleButton onClick={() => setShowAttractions(!showAttractions)}>
        {showAttractions ? 'Ocultar Atractivos Turísticos' : 'Ver Atractivos Turísticos'}
      </ToggleButton>

      {showAttractions && (
        <>
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
        </>
      )}
    </Section>
  );
};

const HomePage = () => {
  const attractions = [
    {
      id: 1,
      name: "VUELTA AL MUNDO",
      description: "Vuelta al Mini Mundo” Circuito Turístico en la Provincia de Huamalíes Llata - Huánuco.",
      image: "/imag/VUELTA AL MUNDO.jpg"
    },
    {
      id: 2,
      name: "JAGRARAJ",
      description: "Ciudadela de Jagraraj es un yacimiento arqueológico en Distrito de Llata, Provincia de Huamalíes, Departamento de Huánuco.",
      image: "/imag/JAGRARAJ.jpg"
    },
    {
      id: 3,
      name: "CENTRO ARQUEOLOGICO DE TANTAMAYO",
      description: "El Complejo Arqueológico de Tantamayo es un conjunto de sitios arqueológicos preincas ubicado en el distrito de Tantamayo.",
      image: "/imag/tantamayo.jpg"
    }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Huámalies me sorprendió con su mezcla de historia y naturaleza. ¡Volveré pronto!",
      author: "María G. - Lima"
    },
    {
      id: 2,
      quote: "El documento resume la investigación de tres centros arqueológicos en la provincia de Huamalíes.",
      author: "Carlos P. - Cusco"
    },
    {
      id: 3,
      quote: "El complejo arqueológico se encuentra ubicado a 7 horas de la ciudad de Huánuco.",
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

      <TourismAttractions attractions={attractions} />

      <Section style={{ background: '#f1f5f9' }}>
        <h2>Nuestra Cultura</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
          Huamalíes: Tierra de historia viva, cultura andina y espíritu resiliente.
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
