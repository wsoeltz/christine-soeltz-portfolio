import * as React from "react";
import data from '../data/main.json';
import GridItem from '../components/GridItem';
import styled from 'styled-components';
import Header from '../components/Header';
import Helmet from 'react-helmet';

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

  const items = data.map((d, i) => {
    return (
      <GridItem
        key={d.TITLE + i}
        {...d}
      />
    );
  })
  
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
      </Helmet>
      <Root>
        <Header />
        <Grid>
          {items}
        </Grid>
      </Root>
    </>
  )
}

export default IndexPage
