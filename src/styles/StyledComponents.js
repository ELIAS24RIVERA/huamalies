import styled from 'styled-components';

export const MainContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9fafb;
  color: #1e293b;
`;

export const HeroContainer = styled.div`
  background: url('/imag/llata.jpg') center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    font-size: 1.25rem;
    max-width: 700px;
  }
`;

export const FilterContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-top: -2rem;
  z-index: 1;
  position: relative;
`;

export const Section = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #0f172a;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.6;
  }
`;

export const AttractionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

export const AttractionCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
  }

  div {
    padding: 1rem;

    h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: #1e293b;
    }

    p {
      font-size: 1rem;
      color: #475569;
    }
  }
`;

export const TestimonialsSection = styled.section`
  background: #f1f5f9;
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: #0f172a;
  }

  .testimonial-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  .testimonial {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    max-width: 600px;
    margin: 0 auto;

    p {
      font-size: 1rem;
      color: #334155;
    }

    strong {
      display: block;
      margin-top: 0.5rem;
      color: #1e293b;
    }
  }
`;

export const Footer = styled.footer`
  background-color: #0f172a;
  color: white;
  text-align: center;
  padding: 3rem 1rem;

  .footer-content {
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }

  .copyright {
    font-size: 0.9rem;
    color: #cbd5e1;
  }
`;
