import { FlexMixin } from '@root/GlobalStyle';
import styled from 'styled-components';

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

export const Buttons = styled.div`
  ${FlexMixin({ align: 'center', justify: 'space-between' })}
`;

export const SubmitButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.color.primary};
  padding: 10px 20px;
  margin: 0 auto;
  display: block;
  transition: 0.3s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.background};
    transition: 0.3s;
  }
`;
