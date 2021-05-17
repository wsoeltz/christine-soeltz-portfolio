import React from "react";
import styled from 'styled-components';
import Header from '../components/Header';
import Helmet from 'react-helmet';
import ProfilePicSrc from '../images/profile-pic.jpg';
import Footer from '../components/Footer';

const Root = styled.main`
  font-family: 'Source Sans Pro', sans-serif;
`;
const Content = styled.div`
  max-width: 800px;
  margin: auto;
  font-size: 1.1rem;
  line-height: 2;
  color: #303e4c;
`;

const Dropcap = styled.span`
  font-family: 'Crushed', serif;
  float: left;
  font-size: 6rem;
  line-height: 1;
  margin: 0.1em 0.1em 0.2em 0;
  padding: 0.1em;
  &:before,
  &:after {
    content: "";
    display: block;
  }
  &:before {
    margin-top: -0.2em;
  }
  &:after {
    margin-bottom: -0.15em;
  }
`;

const ProfilePic = styled.img`
  float: right;
  width: 200px;
  margin: 0 0 0.75rem 0.75rem;
  border-radius: 700px;
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
          <ProfilePic src={ProfilePicSrc} />
          <p>
          <Dropcap>T</Dropcap>here is often a narrative which weaves its way through my work during and after the creative process. Symbolism and meaning evolve, along with the adventure of working with various materials.  The resulting paintings, monotypes and mixed media compositions are as diverse as the mediums I use. Since the work regularly moves between expressions of realism, surrealism and abstraction, the portfolio is varied.  Each piece presents its own set of problem solving opportunities.  For example the monotype, “Stone Halo'',  was inspired by a circular path of stone bricks at the North Bridge, upon which I stood. Bringing the concept back to the studio, I wanted to work out a radial design and use the monotype printmaking technique. Laying out many inked layers of color and shape, the intent was to represent stone and natural ground cover. The center of the radial design was the final consideration. By adding an angel in that focal point of my version of the walkway, rather than using the center brick that is actually at this historic landmark, the entire monotype took on new meaning.  The story of the North Bridge evokes feelings of life, struggle, family and sacrifice in the early days of our country’s fight for freedom. This monotype came together, for me, when the last part, the angel, was painted into the center. It was the final punctuation in both concept and composition. With all parts imagined and real working together, “Stone Halo” evokes feelings of longing for lost ones and a universal  reverence for human life, suffering and sacrifice.
          </p>
          <p>
          My latest pieces are mosaics of ceramic and porcelain tiles. Based upon the spatial ordering in recent paintings and prints, which show a tendency toward geometric components, this current transition into mosaics is a natural trajectory. Broken and cut pieces bring to life images of the natural world which include a snow covered forest, “Meant for You”, a mute swan in “At Home on Ice” and a circle of dance in “Spinning”.
          </p>
          <p>
          Upon stepping away from my art teaching career in the public schools of Wayland, MA, I rented an art studio in 2019 and spent the year creating and adding to my collection of work. I received awards in two juried exhibits that year. The James Library Center for the Arts, Norwell, MA, awarded the painting, "Ninety Years of Light" in the show, "Continuum”.  From ATAC in Framingham, MA, the painting, “The Vote: What Informs Decision?” was awarded recognition in the annual juried exhibit. An extensive collection of work was on view at Howard Street’s Open Studios in 2019, in Framingham, MA and The Hopkinton Cultural Arts Center exhibited submissions in 2020. A selection from this gallery will be exhibited June 2-27, 2021 at Fountain Street Gallery in Boston. I hold a Masters Degree in Technology in Education and a Bachelors in Art Education. I live in Acton, MA and work at Central Street Studios.
          </p>
        </Content>
        <Footer />
      </Root>
    </>
  )
}

export default AboutPage
