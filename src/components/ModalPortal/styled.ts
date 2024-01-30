import styled from 'styled-components';

export const StyledModal = styled.div`
  backdrop-filter: blur(10px);
  position: fixed;
  z-index: 13;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s all;
`;

export const ModalContent = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  max-height: 600px;
  padding: 30px 60px;
  position: relative;
  overflow-y: auto;
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-track {
    display: none;
  }

  @media (max-width: 670px) {
    padding: 20px 40px;
    max-width: 90%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 30px;
  top: 20px;
  width: 20px;
  height: 20px;
  border: none;
  &::before,
  &::after {
    background: ${(props) => props.theme.color.text};
    position: absolute;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    bottom: 50%;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
  
  @media (max-width: 670px) {
    right: 10px;
  }
`;
