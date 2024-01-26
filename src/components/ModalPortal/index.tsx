import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { CloseButton,ModalContent, StyledModal } from './styled';

interface IModalPortalProps {
  isModalVisible: boolean;
  children: React.ReactNode;
  closeModalClick: () => void;
}

function ModalPortal({ children, ...props }: IModalPortalProps) {
  const { isModalVisible, closeModalClick } = props;

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
    }

    return () => {
      document.body.style.overflowY = 'visible';
    };
  }, [isModalVisible]);

  const onModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return createPortal(
    isModalVisible && (
      <StyledModal onClick={closeModalClick}>
        <ModalContent onClick={onModalContentClick}>
          {children}
          <CloseButton onClick={closeModalClick} />
        </ModalContent>
      </StyledModal>
    ),
    document.body,
  );
}

export default ModalPortal;
