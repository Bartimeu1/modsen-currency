import { Link } from 'react-router-dom';

import { FlexMixin } from '@root/GlobalStyle';
import styled from 'styled-components';

interface IBlockContent {
  $isVisible: boolean;
}

interface IBlockLabel {
  $isDropdownVisible: boolean;
}

export const StyledFooterNavigation = styled.nav`
  ${FlexMixin({ justify: 'space-between' })}
  width: 100%;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopXL}) {
    max-width: 450px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    flex-direction: column;
  }
`;

export const Block = styled.div`
  ${FlexMixin({ direction: 'column' })}

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 20px;

    &::after {
      background: ${({ theme }) => theme.color.primary};
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      left: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const LabelTitle = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopXL}) {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    cursor: pointer;
    margin-bottom: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletL}) {
    font-size: ${({ theme }) => theme.fontSize.xs4};
  }
`;

export const NavigationLink = styled(Link)`
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-size: ${({ theme }) => theme.fontSize.xs1};
  color: ${({ theme }) => theme.color.grey};
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

  @media (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontSize.xs2};
  }

  @media (max-width: 920px) {
    font-size: ${({ theme }) => theme.fontSize.xs3};
  }

  @media (max-width: 640px) {
    font-size: ${({ theme }) => theme.fontSize.xs5};
  }
`;

export const BlockContent = styled.div<IBlockContent>`
  ${FlexMixin({ direction: 'column' })}

  @media (max-width: 920px) {
    display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
  }
`;

export const BlockLabel = styled.div<IBlockLabel>`
  ${FlexMixin({ align: 'center', justify: 'space-between' })}
  transition: 0.3s all;

  & svg {
    display: none;
  }

  @media (max-width: 920px) {
    cursor: pointer;
    & svg {
      display: block;
      transition: 0.3s all;
      transform: ${({ $isDropdownVisible }) =>
        $isDropdownVisible ? 'rotate(180deg)' : 'none'};
    }
    & path {
      fill: ${({ theme }) => theme.color.primary};
    }
  }
`;
