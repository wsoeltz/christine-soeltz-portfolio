import React, {useState} from "react";
import RAW_DATA from '../data/main.json';
import GridItem from '../components/GridItem';
import styled from 'styled-components';
import Header from '../components/Header';
import Helmet from 'react-helmet';
import {OverlayPortal} from '../components/Modal';
import Lightbox from '../components/Modal/Lightbox';

const data = RAW_DATA.filter(d => d.TITLE && d.FILENAME);

const Root = styled.main`
  font-family: 'Source Sans Pro', sans-serif;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
  max-width: 100%;
  margin: 2rem 1rem;
`;

// markup
const IndexPage = () => {

  const [active, setActive] = useState(null);
  const nextActive = () => {
    if (active) {
      const curr = data.findIndex(d => d.FILENAME === active.FILENAME);
      let next = curr + 1;
      if (next >= data.length) {
        next = 0;
      }
      setActive(data[next]);
    }
  }
  const prevActive = () => {
    if (active) {
      const curr = data.findIndex(d => d.FILENAME === active.FILENAME);
      let prev = curr - 1;
      if (prev < 0) {
        prev = data.length - 1;
      }
      setActive(data[prev]);
    }
  }

  const items = data.map((d, i) => {
    return (
      <GridItem
        key={d.TITLE + i}
        {...d}
        setActive={setActive}
      />
    );
  })

  const modal = active ? (
    <Lightbox
      {...active}
      onClose={() => setActive(null)}
      prevActive={prevActive}
      nextActive={nextActive}
    />
  ): null;

  return (
    <>
      <Helmet>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Arapey&family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <title>Christine Soeltz | Artist Portfolio</title>
        <meta property='og:title' content={'Christine Soeltz | Artist Portfolio'} />
      </Helmet>
      <Root>
        <Header />
        <Grid>
          {items}
        </Grid>
      </Root>
      <OverlayPortal />
      {modal}
    </>
  )
}

export default IndexPage
