import styled from 'styled-components';

export const StyledConverterList = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 63px;
  @media (max-width: 840px) {
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
  }
`;
