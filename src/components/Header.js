import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';

const H1 = styled.h1`
  font-family: 'Crushed', serif;
  position: relative;
  font-size: 3rem;
  letter-spacing: 1px;
  margin: 0 auto 0.25rem;
  padding: 0 1rem 0.5rem;
  border-bottom: solid 1px #c4cbd2;
  width: 325px;
  white-space: nowrap;
`;

const H2 = styled.h2`
  position: relative;
  font-weight: 400;
  font-size: 1.2rem;
  margin: 0 auto;
  font-family: 'Crushed', serif;
  text-transform: uppercase;
  width: 325px;
  border-bottom: solid 1px #c4cbd2;
  padding: 0.5rem 0;
`;

const Address = styled.div`
  padding: 0.5rem 0;
  width: 325px;
  font-size: 0.875rem;
  font-weight: 400;
  margin: auto;
`;

const WesternAveLink = styled.a`
  font-weight: 600;
  color: #3a87b4;
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
        <Address>
          Western Avenue Studios, Studio 253, Lowell, MA
          <br /><WesternAveLink href='https://westernavenuestudios.com/wa-events/month/' target='_blank'>Open Studios First Saturday of Every Month!</WesternAveLink>
        </Address>
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
            to={'/classes'}
            className={props.location.pathname === '/classes' ? 'active' : undefined}
          >
            Classes
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
