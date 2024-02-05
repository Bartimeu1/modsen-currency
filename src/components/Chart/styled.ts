import styled from 'styled-components';

import { FlexMixin } from '@root/GlobalStyle';

export const StyledChart = styled.div`
  z-index: 0;
  margin-top: 63px;

  @media (max-width: 920px) {
    margin-top: 30px;
  }
`;

export const Controller = styled.div`
  ${FlexMixin({ align: 'center', justify: 'space-around' })}
  margin-bottom: ${({ theme }) => theme.spaces.sm};

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const ControllerButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.xs2};
  padding: 15px 14px;

  @media (max-width: 920px) {
    margin-top: 20px;
    font-size: 18px;
  }
`;

export const NoResults = styled.div`
  ${FlexMixin({ align: 'center', direction: 'column' })}
  margin: 60px auto 0 auto;
`;

export const NoResultsImage = styled.img`
  width: 250px;

  @media (max-width: 920px) {
    width: 230px;
  }
`;

export const NoResultsText = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-bottom: 30px;
`;
