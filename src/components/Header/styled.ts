import styled from 'styled-components';

export const StyledHeader = styled.nav`
  padding-top: ${({ theme }) => theme.spaces.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoImage = styled.img``;

export const ToggleButton = styled.input`
  border: 2px solid ${({ theme }) => theme.color.toggleButton};
  background: ${({ theme }) => theme.color.background};
  appearance: none;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 28px;
  margin: 0;
  vertical-align: top;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  &::after {
    border: 2px solid ${({ theme }) => theme.color.toggleButton};
    background: ${({ theme }) => theme.color.background};
    content: '';
    display: inline-block;
    position: absolute;
    left: -1px;
    top: -1px;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    transform: translateX(0);
    transition: 0.3s;
  }
  &:checked::after {
    background: ${({ theme }) => theme.color.background};
    transform: translateX(calc(100% - 4px));
    transition: 0.3s;
  }
  &:checked {
    background: ${({ theme }) => theme.color.toggleButton};
    transition: 0.3s;
  }
`;
