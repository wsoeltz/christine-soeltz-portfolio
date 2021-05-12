import React, {useEffect, useRef, useState} from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

export const overlayPortalContainerId = 'overlayPortalContainerId';

const overlayPortalZIndex = 3000;

export const OverlayPortal = () => (
  <div
    id={overlayPortalContainerId}
    style={{
      position: 'relative',
      zIndex: overlayPortalZIndex,
    }}
    tabIndex={-1}
  />
);

export const mobileWidth = 600; // in px

const Root = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`;

const Container = styled.div`
  position: relative;
  height: 90%;
  width: 100%;
  pointer-events: none;

  @media screen and (max-width: ${mobileWidth}px), screen and (max-height: 700px) {
    height: calc(100vh - 4rem);
    width: calc(100vw - 4rem);
    margin: auto;
    overflow: auto;
  }
`;

const Content = styled.div`
  overflow: auto;
  height: 100%;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0, 0, 0, .3);
  }
  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, .1);
  }

  @media screen and (max-width: ${mobileWidth}px), screen and (max-height: 700px) {
    overflow: visible;
  }
`;

const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  width: auto;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  appearance: none;
  color: #fff;
  padding: 1rem 2rem;
  background-color: transparent;
  font-size: 2rem;
  position: absolute;
  top: 0;
  right: 0;
`;


const Modal = (props) => {
  const {
    children, onClose
  } = props;

  const overlayPortalContainerNodeRef = useRef(null);

  const [isModalRendered, setIsModalRendered] = useState(false);

  useEffect(() => {
    const node = document.querySelector(`#${overlayPortalContainerId}`);
    if (node !== null) {
      overlayPortalContainerNodeRef.current = node;
      setIsModalRendered(true);
    }
  }, []);

  useEffect(() => {
    const closeOnEsc = (e) => e.key === 'Escape' && onClose ? onClose() : null;
    document.addEventListener('keydown', closeOnEsc);
    return () => document.removeEventListener('keydown', closeOnEsc);
  }, [onClose]);

  let modal;
  if (isModalRendered === true && overlayPortalContainerNodeRef.current !== null) {
    modal = createPortal((
      <Root>
        <Overlay onClick={onClose} />
        <Container>
          <Content>
            {children}
          </Content>
        </Container>
        <CloseButton onClick={onClose}>
        ×
        </CloseButton>
      </Root>
    ), overlayPortalContainerNodeRef.current);
  } else {
    modal = null;
  }

  return modal;
};

export default Modal;
