// src/components/Button.js
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #2a9d8f;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: #21867a;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};



const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  text-align: center;
`;

const DateErrorModal = ({ open, handleClose }) => {
  if (!open) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <h3>Error en las fechas</h3>
        <p>La fecha de check-in no puede ser anterior al día de hoy.</p>
        <Button onClick={handleClose}>Entendido</Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default DateErrorModal;