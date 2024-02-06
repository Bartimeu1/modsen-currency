import { rotate } from '@constants/animtaions';
import styled from 'styled-components';

import { FlexMixin } from '@root/GlobalStyle';

export const StyledLoader = styled.div`
  ${FlexMixin({ align: 'center', justify: 'center' })}
  background: ${({ theme }) => theme.color.loaderBg};
  z-index: 40;
  position: fixed;
  backdrop-filter: blur(10px);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const LoaderImage = styled.img`
  animation: ${rotate} 1s infinite linear;
`;
