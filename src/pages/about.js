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
  padding: 0 1rem;
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

  @media (max-width: 700px) {
    float: none;
    margin: 0 auto 3rem;
    display: block;
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
          With an MS in Technology in Education and a BS in Art Education I was fortunate to enjoy a life long career teaching in Wayland and New York state.  I live in Massachusetts and work at both Western Avenue Studios, Framingham and Central Street Studios, Acton. Ongoing workshops in mosaics, drawing, painting, monotype printmaking and 3D wall art are currently being offered at Western Avenue Studios. Please contact me for more information. 
          </p>
          <p>
            <strong>Recent Exhibits and Open Studios:</strong>
          </p>
          <ul>
            <li>Belmont Gallery of Art, Belmont, MA- March 20 to May 8, 2022</li>
            <li>Western Avenue Studios, Lowell, MA- Monthly Open Studios, 2021 to present</li>
            <li>Fountain Street Gallery, Boston, MA- Annex Member, Exhibited six works, June 2021</li>
            <li>Hopkinton Cultural Arts Center, MA- Group Show, 2020</li>
            <li>The James Library Center for the Arts, Norwell, MA- Juried and Awarded for "Ninety Years of Light", 2019</li>
            <li>Atac, Framingham, MA- Annual Juried Show, Awarded for "The Vote: What Informs Decision?", 2019</li>
            <li>Howard Street Studios, Framingham, MA- Open Studio and by appointment, 2019-20</li>
          </ul>
        </Content>
        <Footer />
      </Root>
    </>
  )
}

export default AboutPage
