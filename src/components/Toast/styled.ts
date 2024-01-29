import styled, { keyframes } from 'styled-components';

const disappearAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
`;

export const StyledToast = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: #34a853;
  position: fixed;
  bottom: 20px;
  left: 10px;
  padding: 10px 20px;
  min-width: 200px;
  display: flex;
  align-items: center;
  animation: ${disappearAnimation} 3s ease-in forwards;
`;

export const ToastText = styled.p`
  color: #fff;
`;
