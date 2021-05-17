import React from "react";
import styled from 'styled-components';
import Header from '../components/Header';
import Helmet from 'react-helmet';

const Root = styled.main`
  font-family: 'Source Sans Pro', sans-serif;
`;
const Content = styled.div`
  max-width: 800px;
  margin: auto;
`;

// markup
const AboutPage = props => {
  return (
    <>
      <Helmet>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crushed&family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <title>About Christine Soeltz</title>
        <meta property='og:title' content={'About Christine Soeltz'} />
      </Helmet>
      <Root>
        <Header location={props.location} />
        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Content>
      </Root>
    </>
  )
}

export default AboutPage
