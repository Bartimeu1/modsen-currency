import styled from 'styled-components';

import { FlexMixin } from '@root/GlobalStyle';

export const Wrapper = styled.div`
  ${FlexMixin({ direction: 'column' })}
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spaces.xs2};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Image = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: ${({ theme }) => theme.spaces.xs2};
  height: 140px;
  align-self: center;
`;

export const Title = styled.h4`
  margin-bottom: ${({ theme }) => theme.spaces.xs2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: #333;
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: #333;
  margin: 5px 0;
`;
