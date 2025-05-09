import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';

// Elimina esta línea si estás definiendo el componente aquí
// import TourismCard from './TourismCard';

const CardContainer = styled.article`
  width: 300px;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transition: transform 0.3s;
  margin: 1rem;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 1rem;
  color: #333;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #1d3557;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  color: #555;

  svg {
    margin-right: 0.5rem;
    color: #e63946;
  }
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
`;

const Rating = styled.div`
  margin: 0.5rem 0;
  color: #f1c40f;

  svg {
    margin-right: 3px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #2a9d8f;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;

  &:hover {
    background-color: #21867a;
  }
`;

// Este es el componente TourismCard que estás definiendo
const TourismCard = ({ image, title, description, city, country, popularity }) => {
  return (
    <CardContainer>
      <Image src={image} alt={`Imagen de ${title}`} />
      <Info>
        <Title>{title}</Title>
        <Location>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          {city}, {country}
        </Location>
        <Description>{description}</Description>
        <Rating>
          {[...Array(5)].map((_, i) => (
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              color={i < popularity ? '#f1c40f' : '#ddd'}
            />
          ))}
        </Rating>
      </Info>
      <Button>Explorar</Button>
    </CardContainer>
  );
};

export default TourismCard;