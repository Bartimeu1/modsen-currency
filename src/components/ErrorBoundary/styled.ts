import { FlexMixin } from '@root/GlobalStyle';
import styled from 'styled-components';

export const Boundary = styled.div`
  ${FlexMixin({ align: 'center', justify: 'center', direction: 'column' })}
  
  height: 100%;
  width: 100%;
`;

export const BoundaryImage = styled.img`
  padding-top: 40px;
  margin-bottom: 30px;
  
  @media (max-width: ${({theme}) => theme.breakpoints.tabletL}) {
    width: 100%;
    padding: 40px 50px 0 50px;
  }
`;

export const BoundaryText = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.boundary};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
