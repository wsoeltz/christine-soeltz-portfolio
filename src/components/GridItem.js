import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  padding-bottom: 1rem;
  background-color: #f8f8f8;
  cursor: pointer;

  &:hover {
    background-color: #e8e8e8;
  }
`;

const ImageContainer = styled.div`
  padding: 1rem;
`;

const Image = styled.div`
  width: 100%;
  min-height: 200px;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.h4`
  font-weight: 400;
  text-align: center;
  color: #333;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
`;

const Detail = styled.div`
  font-size: 0.875rem;
  text-align: center;
  color: #666;
`;

const GridItem = props => {
  const {
    TITLE, FILENAME, GRID_COUNT, GRID_HEIGHT,
    DESCRIPTION, WIDTH_INCHES, HEIGHT_INCHES,
    setActive,
  } = props;
  if (!TITLE || !FILENAME) {
    return null;
  }
  let imageUrl;
  try {
    imageUrl = require('../images/low-res/' + FILENAME).default;
  } catch(err) {
    console.error(err);
  }
  if (!imageUrl) {
    return null;
  }
  const size = WIDTH_INCHES && HEIGHT_INCHES ? (
    <Detail>{WIDTH_INCHES}" × {HEIGHT_INCHES}"</Detail>
  ) : null;
  const desc = DESCRIPTION ? (
    <Detail>{DESCRIPTION}</Detail>
  ) : null;
  return (
    <Root
      style={{
        gridColumn: GRID_COUNT ? `span ${GRID_COUNT}` : 'span 3',
        gridRow: GRID_HEIGHT ? `span ${GRID_HEIGHT}` : undefined,
      }}
      onClick={() => setActive(props)}
    >
      <ImageContainer>
        <Image
          style={{
            backgroundImage: `url("${imageUrl}")`,
            minHeight: GRID_HEIGHT ? '535px' : undefined,
          }}
        />
      </ImageContainer>
      <Title>{TITLE}</Title>
      {size}
      {desc}
    </Root>
  );
}

export default React.memo(GridItem);
