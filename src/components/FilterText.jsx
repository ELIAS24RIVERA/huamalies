import React from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 30px;
  width: 300px;
  max-width: 80%;
  font-size: 1rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  outline: none;
`;

export default function FilterText() {
  return (
    <SearchInput 
      type="text" 
      placeholder="Buscar lugares..." 
    />
  );
}