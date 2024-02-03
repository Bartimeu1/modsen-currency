import styled from 'styled-components';

export const StyledNotFound = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media (max-width: 500px) {
    font-size: ${({ theme }) => theme.fontSize.xs3};
  }
`;
