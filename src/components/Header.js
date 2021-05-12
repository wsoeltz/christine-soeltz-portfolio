import React, {useRef} from 'react';
import styled from 'styled-components';
import CoverPhotoIMG from '../images/cover-photo.jpg';

const Root = styled.header`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  padding: 2rem;
  background-color: #f3f3f3;
  background-image: url("${CoverPhotoIMG}");
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 6rem);
  position: relative;
  color: #303e4c;

  &:before {
    content: '';
    position: absolute;
    top: 2rem;
    bottom: 2rem;
    right: 2rem;
    left: 2rem;
    background-color: rgba(255, 255, 255, 0.55);
    border: solid 3px #fff;
  }
`;

const H1 = styled.h1`
  font-family: 'Arapey', serif;
  position: relative;
  font-size: 3rem;
  letter-spacing: 1px;
  margin-top: 0;
`;

const H2 = styled.h2`
  position: relative;
  font-weight: 400;
  font-size: 1rem;
  max-width: 500px;
  text-align: left;
`;

const Email = styled.div`
  position: relative;
  margin-top: 1rem;
  a {
    color: #b25039;
  }
`;

const TitleContent = styled.div`
  margin: 3rem;
`;

const ButtonContainer = styled.div`
  position: relative;
  margin-top: 3rem;
`;

const GalleryButton = styled.button`
  cursor: pointer;
  border: none;
  width: auto;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  appearance: none;
  font-size: 1.1rem;
  text-transform: uppercase;
  color: #303e4c;
  border: 1px solid #303e4c;
  background-color: transparent;
  padding: 0.875rem;
  margin: 1.25rem 0px clamp(0.75rem, 1vh, 3rem);
  display: flex;
  align-items: center;

  &:hover {
    background-color: #303e4c;
    color: #fff;
  }
`;

const GalleryHeading = styled.div`
  margin: 4rem auto;
  padding: 3rem 1rem;
  max-width: 500px;
  border-top: solid 1px #303e4c;
  border-bottom: solid 1px #303e4c;
  color: #303e4c;
  text-align: center;
  font-size: 2rem;
  text-transform: uppercase;
  font-family: 'Arapey', serif;
  letter-spacing: 2px;
`;

const Header = () => {
  const startOfGalleryRef = useRef(null);

  const onGalleryButtonClick = () => {
    const node = startOfGalleryRef.current;
    if (node) {
      node.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <>
      <Root>
        <TitleContent>
          <H1>Christine Soeltz</H1>
          <H2>A short paragraph about Christine Soeltz. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</H2>
          <Email>
            For commissions or inquiries, contact me at <a href="mailto:chooseitquick@comcast.net">chooseitquick@comcast.net</a>
          </Email>
        </TitleContent>
        <ButtonContainer>
          <GalleryButton onClick={onGalleryButtonClick}>
            View Gallery
          </GalleryButton>
        </ButtonContainer>
      </Root>
      <div ref={startOfGalleryRef} />
      <GalleryHeading>
        Gallery
      </GalleryHeading>
    </>
  );
}

export default Header;
