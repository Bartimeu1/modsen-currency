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
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.xs1};
  text-align: center;
  margin-bottom: 30px;
`;

export const Block = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const BlockTitle = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.xs2};
  align-self: flex-start;
  margin-bottom: 20px;
`;

export const BlockText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: 18px;
`;

export const AmountInput = styled.input`
  background: ${({ theme }) => theme.color.inputBg};
  color: ${({ theme }) => theme.color.text};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 300px;
  padding: 19px 20px;
  font-family: 'Poppins', sans-serif;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
