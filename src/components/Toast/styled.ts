import { disappear } from '@constants/animtaions';
import { FlexMixin } from '@root/GlobalStyle';
import styled from 'styled-components';

export const StyledToast = styled.div`
  ${FlexMixin({ align: 'center' })}
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.toastBg};
  position: fixed;
  bottom: 20px;
  left: 10px;
  padding: 10px 20px;
  min-width: 200px;
  animation: ${disappear} 3s ease-in forwards;
`;

export const ToastText = styled.p`
  color: ${({ theme }) => theme.color.white};
`;
