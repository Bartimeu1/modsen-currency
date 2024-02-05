import styled from 'styled-components';

import { FlexMixin } from '@root/GlobalStyle';

export const Boundary = styled.div`
  ${FlexMixin({ align: 'center', justify: 'center', direction: 'column' })}
  height: 100%;
  width: 100%;
`;

export const BoundaryImage = styled.img`
  padding-top: 40px;
  margin-bottom: 30px;
  max-width: 90%;
`;

export const BoundaryText = styled.p`
  font-family: 'Arial';
  font-size: 30px;
`;
