import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { useOnClickOutside } from '@utils/hooks';

import { CloseButton, ModalContent, StyledModal } from './styled';

interface IModalPortalProps {
  children: React.ReactNode;
  closeModalClick: () => void;
}

export function ModalPortal({ children, ...props }: IModalPortalProps) {
  const { closeModalClick } = props;

  const modalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'visible';
    };
  }, []);

  const onModalClickOutside = () => {
    closeModalClick();
  };

  useOnClickOutside(modalRef, onModalClickOutside);

  return createPortal(
    <StyledModal data-testid="modal">
      <ModalContent ref={modalRef}>
        {children}
        <CloseButton
          onClick={closeModalClick}
          data-testid="modal-close-button"
        />
      </ModalContent>
    </StyledModal>,
    document.body,
  );
}
