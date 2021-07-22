import React from 'react';
import styled, { css } from 'styled-components';

const baseStyle = css`
  color: ${({ color }) =>
    color === 'white' ? 'var(--color-white)' : 'var(--color-mainLight)'};
  font-weight: ${({ bold }) => (bold ? '700' : '300')};
  margin-top: 0;
  letter-spacing: 0.1rem;
  margin-bottom: ${({ noMargin }) => (noMargin ? '0rem' : '3rem')};
`;

const Heading1 = styled.h1`
  font-size: 2.5rem;
  ${baseStyle}
`;

const Heading2 = styled.h2`
  font-size: 1.8rem;
  ${baseStyle}
`;

const Heading3 = styled.h3`
  font-size: 1.5rem;
  ${baseStyle}
`;

const Heading4 = styled.h4`
  font-size: 1.2rem;
  ${baseStyle}
`;

const Heading = ({ children, color, size, bold, noMargin }) => {
  if (size === 'h1')
    return (
      <Heading1 noMargin={noMargin} color={color} bold={bold}>
        {children}
      </Heading1>
    );
  if (size === 'h2')
    return (
      <Heading2 noMargin={noMargin} color={color} bold={bold}>
        {children}
      </Heading2>
    );
  if (size === 'h3')
    return (
      <Heading3 noMargin={noMargin} color={color} bold={bold}>
        {children}
      </Heading3>
    );
  if (size === 'h4')
    return (
      <Heading4 noMargin={noMargin} color={color} bold={bold}>
        {children}
      </Heading4>
    );
};

export default Heading;
