import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const H1 = styled.h1`
  font-family: 'Crushed', serif;
  position: relative;
  font-size: 3rem;
  letter-spacing: 1px;
  margin: 0 auto 0.25rem;
  padding: 0 1rem 0.25rem;
  border-bottom: solid 1px #c4cbd2;
  max-width: min-content;
  white-space: nowrap;
`;

const H2 = styled.h2`
  position: relative;
  font-weight: 400;
  font-size: 1.2rem;
  margin: 0;
  font-family: 'Crushed', serif;
  text-transform: uppercase;
`;
const GalleryHeading = styled.div`
  margin: 4rem auto 4rem;
  padding: 3rem 1rem 0.5rem;
  max-width: 800px;
  border-top: solid 1px #303e4c;
  border-bottom: solid 1px #303e4c;
  color: #303e4c;
  text-align: center;
`;
const Nav = styled.nav`
  margin-top: 3rem;
`;

const NavLink = styled(Link)`
  margin: 0 0.875rem;
  padding: 0.2rem 0.5rem;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 600;
  color: #87929e;

  &.active {
    color: #303e4c;
  }

  &:hover {
    color: #303e4c;
    text-decoration: underline;
  }
`;

const Header = props => {
  return (
    <>
      <GalleryHeading>
        <H1>Christine Soeltz</H1>
        <H2>Mixed-media artist</H2>
        <Nav>
          <NavLink
            to={'/'}
            className={props.location.pathname === '/' ? 'active' : undefined}
          >
            Gallery
          </NavLink>
          <NavLink
            to={'/about'}
            className={props.location.pathname === '/about' ? 'active' : undefined}
          >
            About
          </NavLink>
          <NavLink
            to={'/contact'}
            className={props.location.pathname === '/contact' ? 'active' : undefined}
          >
            Contact
          </NavLink>
        </Nav>
      </GalleryHeading>
    </>
  );
}

export default Header;
