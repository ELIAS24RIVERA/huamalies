import React from 'react';
import styled from 'styled-components';
import Filters from './Filters';
import FilterText from './FilterText';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MainContainer,
  HeroContainer,
  FilterContainer,
  Section,
  AttractionsGrid,
  AttractionCard,
  TestimonialsSection,
  Footer
} from '../styles/StyledComponents';


const HomePage = () => {
  const attractions = [
    {
      id: 1,
      name: "VUELTA AL MUNDO",
      description: "“Vuelta al Mini Mundo” Circuito Turístico en la Provincia de Huamalíes Llata - Huánuco.",
      image: "/imag/VUELTA AL MUNDO.jpg"
    },
    {
      id: 1,
      name: "VUELTA AL MUNDO",
      description: "“Vuelta al Mini Mundo” Circuito Turístico en la Provincia de Huamalíes Llata - Huánuco.",
      image: "/imag/VUELTA AL MUNDO.jpg"
    },
    // ... puedes añadir más atracciones aquí
  ];

  const testimonials = [
    {
      id: 1,
      quote: "Huámalies me sorprendió con su mezcla de historia y naturaleza. ¡Volveré pronto!",
      author: "María G. - Lima"
    },
    // ... más testimonios
  ];

  return (
    <MainContainer>
      <header>
        <HeroContainer>
          <h1>Descubre Huánuco</h1>
          <p>"Huamalíes, Cuna de la Emancipación de Americana"                         -  "Capital Folclórica de la Región Huánuco"</p>
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

      <Section style={{ background: '#f1f5f9' }}>
        <h2>Nuestra Cultura</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto 2rem', fontSize: '1.1rem' }}>
          Huamalíes: Tierra de historia viva, cultura andina y espíritu resiliente.
        </p>
      </Section>

      <TestimonialsSection>
        <h2>Lo que dicen nuestros visitantes</h2>
        <div className="testimonial-container">
          {testimonials.map(testimonial => (
            <div className="testimonial" key={testimonial.id}>
              <p>"{testimonial.quote}"</p>
              <p><strong>- {testimonial.author}</strong></p>
            </div>
          ))}
        </div>
      </TestimonialsSection>

      <Footer>
        <div className="footer-content">
          {/* Aquí puedes poner enlaces, redes sociales, etc. */}
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} Turismo Huánuco - Todos los derechos reservados
        </div>
      </Footer>
    </MainContainer>
  );
};

export default HomePage;

