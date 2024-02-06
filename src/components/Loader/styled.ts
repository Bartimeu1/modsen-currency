import { rotate } from '@constants/animtaions';
import styled from 'styled-components';

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
  animation: ${rotate} 1s infinite linear;
`;
