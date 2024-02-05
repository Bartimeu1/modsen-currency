import styled from 'styled-components';

import { FlexMixin } from '@root/GlobalStyle';

export const StyledConverterList = styled.div`
  ${FlexMixin({ justify: 'space-between', wrap: 'wrap' })}
  margin-top: 63px;
  
  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
`;
