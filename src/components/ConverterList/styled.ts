import { FlexMixin } from '@root/GlobalStyle';
import styled from 'styled-components';

export const StyledConverterList = styled.div`
  ${FlexMixin({ justify: 'space-between', wrap: 'wrap' })}
  
  margin-top: 63px;

  @media (max-width: ${({ theme }) => theme.breakpoints.laptopM}) {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
`;
