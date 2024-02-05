import styled, { keyframes } from 'styled-components';

import { FlexMixin } from '@root/GlobalStyle';

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
  ${FlexMixin({ align: 'center' })}
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: #34a853;
  position: fixed;
  bottom: 20px;
  left: 10px;
  padding: 10px 20px;
  min-width: 200px;
  animation: ${disappearAnimation} 3s ease-in forwards;
`;

export const ToastText = styled.p`
  color: #fff;
`;
