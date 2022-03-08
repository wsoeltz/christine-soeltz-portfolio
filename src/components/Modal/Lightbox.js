import React from 'react';
import styled from 'styled-components';
import Modal from './';

const Root = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-family: 'Source Sans Pro', sans-serif;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 80%;
  pointer-events: all;
`;

const Content = styled.div`
  position: relative;
`;

const Title = styled.h1`
  margin-bottom: 0.25rem;
  font-size: 1.55rem;
  pointer-events: all;
  text-align: center;
`;

const Detail = styled.div`
  text-align: center;
  opacity: 0.85;
  pointer-events: all;
`;

const NavButtonBase = styled.div`
  cursor: pointer;
  pointer-events: all;
  border: none;
  width: auto;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #fff;
  padding: 1rem 2rem;
  background: transparent;
  font-size: 2rem;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`;

const NextButton = styled(NavButtonBase)`
  right: 0;
  transform: translateX(100%);
`;
const PrevButton = styled(NavButtonBase)`
  left: 0;
  transform: translateX(-100%);
`;

const Lightbox = props => {
  const {
    TITLE, FILENAME,
    WIDTH_INCHES, HEIGHT_INCHES,
    DESCRIPTION,
  } = props;

  if (!TITLE || !FILENAME) {
    return null;
  }
  let imageUrl;
  try {
    imageUrl = require('../../images/watermarked/' + FILENAME).default;
  } catch(err) {
    console.error(err);
  }
  if (!imageUrl) {
    imageUrl = '';
  }
  const size = WIDTH_INCHES && HEIGHT_INCHES ? (
    <Detail>{WIDTH_INCHES}" × {HEIGHT_INCHES}"</Detail>
  ) : null;
  const desc = DESCRIPTION ? (
    <Detail>{DESCRIPTION}</Detail>
  ) : null;

  return (
    <Modal onClose={props.onClose}>
      <Root>
        <Image
          src={imageUrl}
        />
        <Content>
          <Title>
            {props.TITLE}
          </Title>
          {size}
          {desc}
          <NextButton
            onClick={props.nextActive}
            role="button"
          >
            →
          </NextButton>
          <PrevButton
            onClick={props.prevActive}
            role="button"
          >
            ←
          </PrevButton>
        </Content>
      </Root>
    </Modal>
  );
}

export default Lightbox;
