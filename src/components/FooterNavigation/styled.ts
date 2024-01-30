import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface IBlockContent {
  $isVisible: boolean;
}

interface IBlockLabel {
  $isDropdownVisible: boolean;
}

export const StyledFooterNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;

  @media (max-width: 1150px) {
    max-width: 450px;
  }

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 920px) {
    position: relative;
    padding-bottom: 20px;
    margin-bottom: 20px;
    &::after {
      background: ${({ theme }) => theme.color.text};
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
  font-family: 'Inter', sans-serif;
  font-size: 28px;
  margin-bottom: 40px;

  @media (max-width: 1150px) {
    font-size: 25px;
  }
  @media (max-width: 920px) {
    cursor: pointer;
    margin-bottom: 0;
  }
  @media (max-width: 640px) {
    font-size: 16px;
  }
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

  @media (max-width: 1150px) {
    font-size: 21px;
  }
  @media (max-width: 920px) {
    font-size: 19px;
  }
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;

export const BlockContent = styled.div<IBlockContent>`
  display: flex;
  flex-direction: column;

  @media (max-width: 920px) {
    display: ${({ $isVisible }) => ($isVisible ? 'flex' : 'none')};
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10px;
  }
`;

export const BlockLabel = styled.div<IBlockLabel>`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      fill: ${(props) => props.theme.color.text};
    }
  }
`;
