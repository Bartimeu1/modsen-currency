import styled from 'styled-components';

export const ModalTitle = styled.h5`
  padding: 30px 0;
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.xs1};
  text-align: center;
`;
