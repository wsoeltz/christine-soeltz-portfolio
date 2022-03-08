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
  text-align: center;
  font-size: 1.2rem;
  line-height: 2;
  color: #303e4c;
  padding: 0 1rem;

  a {
    color: #3a87b4;
  }
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
        <title>Contact Christine Soeltz</title>
        <meta property='og:title' content={'Contact Christine Soeltz'} />
      </Helmet>
      <Root>
        <Header location={props.location} />
        <Content>
          <p>
            Ongoing workshops in mosaics, drawing, painting, monotype printmaking and 3D wall art are currently being offered at Western Avenue Studios. Please contact me for more information.
          </p>
          <p>
            For commisions or inquiries, please email me at <a href="mailto:csoeltz@gmail.com">csoeltz@gmail.com</a>
          </p>
        </Content>
        <Footer />
      </Root>
    </>
  )
}

export default AboutPage
