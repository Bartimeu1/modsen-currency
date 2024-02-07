import { FlexMixin } from '@root/GlobalStyle';
import styled from 'styled-components';

export const StyledInputField = styled.div`
  ${FlexMixin({ direction: 'column' })}
  margin-bottom: 30px;
`;

export const FieldTitle = styled.h5`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.xs2};
  align-self: flex-start;
  margin-bottom: 20px;

  @media (max-width: 500px) {
    margin-bottom: 15px;
    font-size: ${({ theme }) => theme.fontSize.xs4};
  }
`;

export const InputWrapper = styled.div``;

export const Input = styled.input`
  background: ${({ theme }) => theme.color.inputBg};
  color: ${({ theme }) => theme.color.primary};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 300px;
  padding: 19px 20px;
  font-family: ${({ theme }) => theme.fontFamily.main};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    padding: 19px 15px;
    width: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    width: 100%;
  }
`;

export const ValidationText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs5};
  color: ${({ theme }) => theme.color.error};
  margin-top: 5px;
  text-align: left;
`;
