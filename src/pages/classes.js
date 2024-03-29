import React from "react";
import styled from 'styled-components';
import Header from '../components/Header';
import Helmet from 'react-helmet';
import Footer from '../components/Footer';

const Root = styled.main`
  font-family: 'Source Sans Pro', sans-serif;
`;
const Content = styled.div`
  max-width: 800px;
  margin: auto;
  font-size: 1.2rem;
  line-height: 2;
  color: #303e4c;
  padding: 0 1rem;
`;

const Anchor = styled.a`
  color: #3a87b4;
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
        <title>Classes by Christine Soeltz</title>
        <meta property='og:title' content={'Classes by Christine Soeltz'} />
      </Helmet>
      <Root>
        <Header location={props.location} />
        <Content>
          <p>
            Classes are offered in drawing, painting, 3D wall art, printmaking, mosaics, and design concepts. Please contact me for more information regarding class options:
          </p>
          <p>
            <Anchor href="mailto:csoeltz@gmail.com">csoeltz@gmail.com</Anchor>
            <br />
            <Anchor href="sms:+19783376512">+1 978-337-6512</Anchor>
          </p>
        </Content>
        <Footer />
      </Root>
    </>
  )
}

export default AboutPage
