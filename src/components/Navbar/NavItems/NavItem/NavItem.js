import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Li = styled.li`
  display: flex;
  height: 100%;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0rem 1rem;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--color-white);
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  &:hover {
    border-bottom: 2px solid var(--color-white);
  }
  &.active {
    border-bottom: 2px solid var(--color-white);
  }
`;

const NavItem = ({ link, children }) => {
  return (
    <Li>
      <StyledNavLink exact to={link} activeClassName='active'>
        {children}
      </StyledNavLink>
    </Li>
  );
};

export default NavItem;
