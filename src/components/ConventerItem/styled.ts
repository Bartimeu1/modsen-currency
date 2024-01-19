import styled from 'styled-components';

export const StyledConverterItem = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 30px 0 30px 32px;
  display: flex;
  align-items: center;
  width: 520px;
  background: #202025;
  margin-bottom: 56px;
  &:last-child: {
    margin-bottom: 0;
  }
`;

export const Title = styled.p`
  font-size: 35px;
  color: #d9d9d9;
`;

export const IconImage = styled.img`
  margin-right: ${({ theme }) => theme.spaces.md};
`;
