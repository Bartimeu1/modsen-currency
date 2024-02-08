import { blink } from '@constants/animtaions';
import { FlexMixin } from '@root/GlobalStyle';
import styled from 'styled-components';

export const StyledUpdateInfo = styled.div`
  ${FlexMixin()}
  
  margin: 57px auto 0 auto;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    margin: 40px auto 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    margin: 30px auto 0 auto;
  }
`;

export const UpdateImage = styled.img`
  margin-right: 18px;
  animation: ${blink} 2s linear infinite;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    width: 25px;
    margin-right: 10px;
  }
`;

export const UpdateText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl2};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.primary};
  opacity: 85%;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    font-size: ${({ theme }) => theme.fontSize.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    font-size: ${({ theme }) => theme.fontSize.xs5};
  }
`;
