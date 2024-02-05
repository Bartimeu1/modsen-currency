import styled from 'styled-components';

import { FlexMixin } from '@root/GlobalStyle';

export const StyledConverterItem = styled.div`
  ${FlexMixin({ align: 'center' })}
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.color.convertItem};
  padding: 30px 0 30px 32px;
  width: 520px;
  margin-bottom: 56px;
  cursor: pointer;

  &:last-child: {
    margin-bottom: 0;
  }

  @media (max-width: 1100px) {
    width: 48%;
    padding: 25px 0 25px 27px;
    margin-bottom: 45px;
  }

  @media (max-width: 840px) {
    width: 90%;
    padding: 16px 0 16px 12px;
    margin-bottom: 17px;
  }
`;

export const IconImage = styled.img`
  margin-right: ${({ theme }) => theme.spaces.md};

  @media (max-width: 1100px) {
    width: 70px;
    margin-right: 25px;
  }

  @media (max-width: 840px) {
    width: 45px;
    margin-right: 11px;
  }
`;

export const Content = styled.div`
  ${FlexMixin({ direction: 'column' })}
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.color.text};
  font-size: 35px;
  opacity: 0.85;

  @media (max-width: 1100px) {
    font-size: 25px;
  }

  @media (max-width: 840px) {
    font-size: 15px;
  }
`;

export const Rate = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl1};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.rateText};

  @media (max-width: 1100px) {
    font-size: 27px;
  }
  
  @media (max-width: 840px) {
    font-size: 13px;
  }
`;
