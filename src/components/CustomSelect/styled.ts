import styled from 'styled-components';

interface ISelectLabel {
  $isSelectOpened: boolean;
}

export const StyledConverterSelect = styled.div`
  background: ${({ theme }) => theme.color.inputBg};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 19px 20px;
  position: relative;
  width: 300px;
  z-index: 10;
`;

export const SelectLabel = styled.div<ISelectLabel>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.3s all;
  & svg {
    transition: 0.3s all;
  }
  & path {
    fill: ${(props) => props.theme.color.text};
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
  display: flex;
  align-items: center;
`;

export const ItemText = styled.p`
  margin-right: 10px;
`;

export const ItemImage = styled.img`
  width: 20px;
`;

export const Dropdown = styled.div`
  background: ${({ theme }) => theme.color.inputBg};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  padding: 10px 10px 10px 20px;
  position: absolute;
  width: 100%;
  top: 103%;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DropdownItem = styled.div`
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    opacity: 0.5;
  }
`;
