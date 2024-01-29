import styled from 'styled-components';

export const StyledMap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 63px;
`;

export const MapTitle = styled.h2`
  color: ${({ theme }) => theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.xl4};
  margin-bottom: 24px;
`;