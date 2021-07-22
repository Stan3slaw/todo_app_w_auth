import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <img height={30} src="/img/logo.png" alt="Logo" />
    </LogoWrapper>
  );
};

export default Logo;
