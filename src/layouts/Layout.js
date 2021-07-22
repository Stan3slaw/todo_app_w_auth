import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Navbar from '../components/Navbar/Navbar';

const MainWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children }) => {
  const loggedIn = useSelector(({ firebase }) => firebase.auth);
  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <MainWrapper>{children}</MainWrapper>
    </>
  );
};

export default Layout;
