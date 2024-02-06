import { FlexMixin } from '@root/GlobalStyle';
import styled from 'styled-components';

interface ISelectLabel {
  $isSelectOpened: boolean;
}

export const StyledSelect = styled.div`
  background: ${({ theme }) => theme.color.inputBg};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 19px 20px;
  position: relative;
  width: 300px;
  z-index: 10;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktopM}) {
    padding: 19px 15px;
    width: 250px;
  }
`;

export const SelectLabel = styled.div<ISelectLabel>`
  ${FlexMixin({ align: 'center', justify: 'space-between' })}
  cursor: pointer;
  transition: 0.3s all;

  & svg {
    transition: 0.3s all;
  }

  & path {
    fill: ${({ theme }) => theme.color.primary};
  }

  ${({ $isSelectOpened }) =>
    $isSelectOpened &&
    `
    & svg {
      transform: rotate(180deg);
    }
  `}
`;

export const LabelValue = styled.div`
  ${FlexMixin({ align: 'center' })}
`;

export const ItemText = styled.p`
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletS}) {
    font-size: ${({ theme }) => theme.fontSize.xs5};
    margin-right: 5px;
  }
`;

export const ItemImage = styled.img`
  width: 20px;
`;

export const Dropdown = styled.div`
  ${FlexMixin({ direction: 'column', align: 'center' })}
  background: ${({ theme }) => theme.color.inputBg};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 10px 10px 10px 20px;
  position: absolute;
  width: 100%;
  top: 103%;
  left: 0;
`;

export const DropdownItem = styled.div`
  ${FlexMixin({ align: 'center' })}
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    opacity: 50%;
  }
`;
