import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% {transform: rotate(0deg);}
	100% {transform: rotate(360deg);}
`;

export const StyledLoader = styled.div`
  z-index: 40;
  position: fixed;
  backdrop-filter: blur(10px);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderImage = styled.img`
  animation: ${rotateAnimation} 1s infinite linear;
`;
