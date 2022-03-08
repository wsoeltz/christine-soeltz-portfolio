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

const Button = styled.a`
  text-decoration: none;
  background-color: #3a87b4;
  color: #fff;
  padding: 0.5rem 0.85rem;
  border-radius: 16px;
  font-size: 1rem;
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
            <strong>Mosaic Sessions</strong> are recurring meetups which introduce participants to ceramic mosaics.  They are facilitated by Christine Soeltz, artist and educator in Studio 253 @ Western Avenue Studios, Lowell, MA.
          </p>
          <p>
            <strong>Low Introductory Cost:</strong> 5 visits at 2 hrs each includes materials: $130. <strong>Currently there is availability</strong> for Tuesdays 10:30-12:30, Wednesdays and Thursdays 4:30-6:30pm and 6:30-8:30pm. Starting date is yours to choose. There is always a chance another session can be added if these times do not work for your schedule.
          </p>
          <p>
            <strong>Contact:</strong> Email <Anchor href="mailto:csoeltz@gmail.com">csoeltz@gmail.com</Anchor> or stop into Studio#253 or slip a note under the door with your contact info.
          </p>
          <p>
            <strong>More suggestions for classes:</strong> Fill out this survey indicating interest in the above mosaic sessions and/or other various offerings including: Drop In, Paint, Draw, Printmaking, 3D Wall Art:
          </p>
          <p style={{textAlign: "center"}}>
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSfi_3yovjkXQUd022EJIrjhAdx-JzpA_astHGsFQqkNNW6urQ/viewform?vc=0&c=0&w=1&flr=0"
              target="_blank"
            >
              Class suggestions survey
            </Button>
          </p>
        </Content>
        <Footer />
      </Root>
    </>
  )
}

export default AboutPage
