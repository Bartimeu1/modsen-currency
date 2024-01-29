import styled, { keyframes } from 'styled-components';

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
  display: flex;
  margin: 57px auto 0 auto;
  align-items: center;
`;

export const UpdateImage = styled.img`
  margin-right: 18px;
  animation: ${blinkAnimation} 2s linear infinite;
`;

export const UpdateText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl2};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.text};
  opacity: 0.85;
`;
