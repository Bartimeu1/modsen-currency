import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useOnClickOutside } from '@utils/hooks';

import { CloseButton, ModalContent, StyledModal } from './styled';

interface IModalPortalProps {
  isModalVisible: boolean;
  children: React.ReactNode;
  closeModalClick: () => void;
}

export function ModalPortal({ children, ...props }: IModalPortalProps) {
  const { isModalVisible, closeModalClick } = props;

  const modalRef = useRef(null);

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

  const onModalClickOutside = () => {
    closeModalClick();
  };

  useOnClickOutside(modalRef, onModalClickOutside);

  return createPortal(
    isModalVisible && (
      <StyledModal data-testid="modal">
        <ModalContent ref={modalRef}>
          {children}
          <CloseButton
            onClick={closeModalClick}
            data-testid="modal-close-button"
          />
        </ModalContent>
      </StyledModal>
    ),
    document.body,
  );
}
