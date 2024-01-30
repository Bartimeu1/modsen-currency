import styled from 'styled-components';

export const StyledChart = styled.div`
  z-index: 0;
  margin-top: 63px;

  @media (max-width: 920px) {
    margin-top: 30px;
  }
`;

export const Controller = styled.div`
  margin-bottom: ${({ theme }) => theme.spaces.sm};
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const ControllerButton = styled.button`
  border: 1px solid ${({ theme }) => theme.color.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.xs2};
  padding: 15px 14px;

  @media (max-width: 920px) {
    margin-top: 20px;
    font-size: 18px;
  }
`;

export const NoResults = styled.div`
  margin: 60px auto 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NoResultsImage = styled.img`
  width: 250px;

  @media (max-width: 920px) {
    width: 230px;
  }
`;

export const NoResultsText = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-bottom: 30px;
`;
