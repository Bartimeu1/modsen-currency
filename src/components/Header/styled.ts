import styled, { keyframes } from 'styled-components';

import { IContent, IToggleButton, IBurgerMenu } from './types';

import { FlexMixin } from '@root/GlobalStyle';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledHeader = styled.header`
  padding-top: ${({ theme }) => theme.spaces.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    padding-top: 10px;
  }
`;

export const Content = styled.div<IContent>`
  ${FlexMixin({ align: 'center', justify: 'space-between' })}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    display: none;
    animation: ${fadeIn} 0.5s ease;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.color.background};
    z-index: 11;

    ${({ $isBurgerActive }) =>
      $isBurgerActive &&
      `
      display: flex;
  `}
  }
`;

export const LogoImage = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    width: 23px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    width: 40px;
    margin-bottom: 20px;
  }
`;

export const ToggleButton = styled.input<IToggleButton>`
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
    ${({ $isLightTheme }) =>
      $isLightTheme && `transform: translateX(calc(100% - 4px));`}
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    width: 27px;
    height: 17px;

    &::after {
      width: 15px;
      height: 15px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    margin-top: 20px;
    width: 50px;
    height: 28px;

    &::after {
      width: 26px;
      height: 26px;
    }
  }
`;

export const BurgerMenu = styled.div<IBurgerMenu>`
  z-index: 12;
  border: none;
  position: relative;
  display: none;
  width: 17px;
  height: 11.5px;
  transition: 0.3s;
  &::before,
  &::after {
    background: ${({ theme }) => theme.color.text};
    position: absolute;
    left: 0;
    content: '';
    width: 100%;
    height: 1.5px;
    border-radius: 2px;
    transition: 0.3s;
  }

  &::before {
    top: 0;
  }

  &::after {
    bottom: 0;
  }

  ${({ $isBurgerActive }) =>
    $isBurgerActive &&
    `
    &::before {
      transform: rotate(-45deg);
      top: 5px;
    }

    &::after {
      transform: rotate(45deg);
      bottom: 5px;
    }
    
    & span {
      display: none;
    }
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    display: block;
  }
`;

export const BurgerRow = styled.span`
  background: ${({ theme }) => theme.color.text};
  position: absolute;
  width: 100%;
  height: 1.5px;
  top: 5px;
  border-radius: 2px;
  left: 0;
`;
