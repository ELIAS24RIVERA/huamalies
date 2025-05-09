import React from 'react';
import styled from 'styled-components';

const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 20px;
  background: #3498db;
  color: white;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: #2980b9;
  }
`;

export default function Filters() {
  return (
    <FiltersContainer>
      <FilterButton>Todos</FilterButton>
      <FilterButton>Históricos</FilterButton>
      <FilterButton>Naturales</FilterButton>
      <FilterButton>Culturales</FilterButton>
    </FiltersContainer>
  );
}