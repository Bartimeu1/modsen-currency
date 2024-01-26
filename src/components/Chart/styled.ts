import styled from 'styled-components';

export const StyledChart = styled.div`
  z-index: 0;
  margin-top: 63px;
`;

export const Controller = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces.sm};
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ControllerButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.xs2};
  padding: 15px 14px;
`;
