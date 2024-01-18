import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const StyledFooterNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BlockTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-family: 'Inter', sans-serif;
  font-size: 28px;
  margin-bottom: 40px;
`;

export const NavigationLink = styled(Link)`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.xs1};
  color: #898989;
  text-decoration: none;
  margin-bottom: 16px;
  transition: 0.3s;

  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    color: ${({ theme }) => theme.color.target};
    transition: 0.3s;
  }
`;
