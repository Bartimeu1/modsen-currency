import styled from 'styled-components';

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

export const BlockInput = styled.input`
  background: ${({ theme }) => theme.color.inputBg};
  color: ${({ theme }) => theme.color.text};
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  width: 300px;
  padding: 15px 19px;
  font-family: 'Poppins', sans-serif;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  color: ${({ theme }) => theme.color.text};
  padding: 10px 20px;
  margin: 0 auto;
  display: block;
  transition: 0.3s;

  &:hover {
    border: 1px solid ${({ theme }) => theme.color.text};
    background: ${({ theme }) => theme.color.text};
    color: ${({ theme }) => theme.color.background};
    transition: 0.3s;
  }
`;
