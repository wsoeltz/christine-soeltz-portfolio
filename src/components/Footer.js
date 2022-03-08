import React from 'react';
import styled from 'styled-components';

const Root = styled.footer`
  text-align: center;
  margin: 3rem 0 2rem;
  color: #303e4c;
`;

const Footer = () => {
  return (
    <Root>
      Website and all work copyright © Christine Soeltz, {new Date().getFullYear()}
    </Root>
  );
}

export default Footer;
