import React from 'react';
import styled from 'styled-components';

import NavItem from './NavItem/NavItem';

const Nav = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

const NavItems = ({ loggedIn }) => {
  let links;
  if (loggedIn.uid) {
    links = (
      <Ul>
        <NavItem link='/'>Todo</NavItem>
        <NavItem link='/logout'>Logout</NavItem>
      </Ul>
    );
  } else
    links = (
      <Ul>
        <NavItem link='/login'>Login</NavItem>
        <NavItem link='/signup'>Signup</NavItem>
      </Ul>
    );
  return <Nav>{links}</Nav>;
};

export default NavItems;
