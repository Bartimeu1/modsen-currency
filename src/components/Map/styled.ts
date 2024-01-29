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

export const InfoWindowWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: ${({ theme }) => theme.spaces.xs2};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

export const InfoWindowImage = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: ${({ theme }) => theme.spaces.xs2};
  height: 140px;
  align-self: center;
`;

export const InfoWindowTitle = styled.h4`
  margin-bottom: ${({ theme }) => theme.spaces.xs2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: #333;
`;

export const InfoWindowText = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: #333;
  margin: 5px 0;
`;
