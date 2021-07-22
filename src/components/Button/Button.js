import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  border: none;
  width: ${({ contain }) => (contain ? 'auto' : '100%')};
  padding: 1rem 4rem;
  margin: 1.5rem 0 2rem 0;
  border-radius: 2rem;
  background-color: var(--color-mainLight);
  box-shadow: 0rem 0.5rem 3.5rem var(--color-shadow);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-white);
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(2px);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: #333;
  }
`;

const Button = ({ children, disabled, loading, contain, ...rest }) => {
  return (
    <StyledButton disabled={disabled} contain={contain} {...rest}>
      {loading ? loading : children}
    </StyledButton>
  );
};

export default Button;
