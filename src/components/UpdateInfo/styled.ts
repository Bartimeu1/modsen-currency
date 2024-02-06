import styled, { keyframes } from 'styled-components';

import { FlexMixin } from '@root/GlobalStyle';

const blinkAnimation = keyframes`
  25% { 
    opacity: 1;
  }
  50% {
    opacity: 0
  }
  100% {
    opacity 1;
  }
`;

export const StyledUpdateInfo = styled.div`
  ${FlexMixin()}
  margin: 57px auto 0 auto;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    margin: 40px auto 0 auto;
  }

  @media (max-width: 640px) {
    margin: 30px auto 0 auto;
  }
`;

export const UpdateImage = styled.img`
  margin-right: 18px;
  animation: ${blinkAnimation} 2s linear infinite;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    width: 25px;
    margin-right: 10px;
  }
`;

export const UpdateText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl2};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.text};
  opacity: 0.85;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    font-size: ${({ theme }) => theme.fontSize.xs5};
  }
`;
