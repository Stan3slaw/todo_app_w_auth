import React from 'react';
import styled from 'styled-components';

import { Container } from '../../layouts/elements';
import Logo from '../Logo/Logo';
import NavItems from './NavItems/NavItems';

const FixedWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  padding: 0rem 2rem;
  background-color: var(--color-mainDark);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const Navbar = ({ loggedIn }) => {
  return (
    <FixedWrapper>
      <Container>
        <Wrapper>
          <Logo />
          <NavItems loggedIn={loggedIn} />
        </Wrapper>
      </Container>
    </FixedWrapper>
  );
};

export default Navbar;
