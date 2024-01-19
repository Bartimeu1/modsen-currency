import styled from 'styled-components';

export const StyledUpdateInfo = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
`;

export const UpdateImage = styled.img`
  margin-right: 18px;
`;

export const UpdateText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl2};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.text};
  opacity: 0.85;
`;
