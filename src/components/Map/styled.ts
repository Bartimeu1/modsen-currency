import styled from 'styled-components';

import { FlexMixin } from '@root/GlobalStyle';

export const StyledMap = styled.div`
  ${FlexMixin({ align: 'center', direction: 'column' })}
  margin-top: 63px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    margin-top: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    margin-top: 15px;
  }
`;

export const MapTitle = styled.h2`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.xl4};
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    font-size: ${({ theme }) => theme.fontSize.xs4};
  }
`;

export const MapWrapper = styled.div`
  margin-top: 80px;
  width: 96%;
  height: 500px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopS}) {
    margin-top: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    margin-top: 20px;
  }
`;
