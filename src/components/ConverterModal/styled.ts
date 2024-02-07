import { FlexMixin } from '@root/GlobalStyle';
import styled from 'styled-components';

export const Content = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: 500px;
  height: 600px;
  z-index: 5;
  padding: 30px 40px 0 40px;
  position: relative;
`;

export const Title = styled.h5`
  color: ${({ theme }) => theme.color.primary};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.xs1};
  text-align: center;
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    font-size: ${({ theme }) => theme.fontSize.xs2};
    margin-bottom: 20px;
  }
`;

export const Block = styled.div`
  ${FlexMixin({ align: 'center', direction: 'column' })}
  margin-bottom: 30px;
  position: relative;
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    margin-bottom: 20px;

    div,
    input {
      width: 100%;
    }
  }
`;

export const BlockTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.xs2};
  align-self: flex-start;
  margin-bottom: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    margin-bottom: 15px;
    font-size: ${({ theme }) => theme.fontSize.xs4};
  }
`;

export const BlockText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.xs3};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    font-size: ${({ theme }) => theme.fontSize.xs4};
  }
`;

export const Result = styled.div`
  ${FlexMixin({ align: 'center', justify: 'center' })}

  & p {
    margin-right: 10px;
  }
`;

export const ResultCurrencyImage = styled.img`
  width: 20px;
`;
