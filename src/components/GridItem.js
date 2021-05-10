import React from 'react';

const GridItem = props => {
  const {
    TITLE, FILENAME,
  } = props;
  if (!TITLE || !FILENAME) {
    return null;
  }
  return (
    <div>
      <h3>{TITLE}</h3>
      <img
        src={require('../images/low-res/' + FILENAME).default}
        alt={TITLE}
      />
    </div>
  );
}

export default GridItem;
