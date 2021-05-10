import * as React from "react";
import data from '../data/main.json';
import GridItem from '../components/GridItem';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
    <main>
      <h1>Christine Soeltz' Portfolio</h1>
      <Grid>
        {items}
      </Grid>
    </main>
  )
}

export default IndexPage
