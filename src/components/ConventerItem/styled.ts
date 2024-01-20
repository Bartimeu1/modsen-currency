import styled from 'styled-components';

export const StyledConverterItem = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background: ${({ theme }) => theme.color.convertItem};
  padding: 30px 0 30px 32px;
  display: flex;
  align-items: center;
  width: 520px;
  margin-bottom: 56px;
  cursor: pointer;
  &:last-child: {
    margin-bottom: 0;
  }
`;

export const IconImage = styled.img`
  margin-right: ${({ theme }) => theme.spaces.md};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.color.text};
  font-size: 35px;
  opacity: 0.85;
`;

export const Rate = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl1};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.rateText};
`;
