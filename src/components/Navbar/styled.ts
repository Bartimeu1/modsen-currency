import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 -56px;
`;

export const NavbarLink = styled(Link)`
  color: ${({ state, theme }) =>
    state.isCurrent ? theme.color.target : theme.color.text};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.xs2};
  margin: 0 ${({ theme }) => theme.spaces.lg};
  text-decoration: none;
  transition: 0.5s;
  position: relative;
  &::after {
    content: '';
    background: ${({ state, theme }) =>
      state.isCurrent ? theme.color.target : theme.color.text};
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -6px;
    opacity: 0;
    left: 0;
    transition: 0.5s;
  }
  &:hover {
    &::after {
      opacity: 1;
      transition: 0.5s;
      bottom: 0;
    }
  }
`;
