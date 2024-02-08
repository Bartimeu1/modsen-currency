import React, { useRef } from 'react';

import { PortalWrapper } from '@components/PortalWrapper';
import { useLockBodyScroll,useOnClickOutside } from '@root/hooks';

import { CloseButton, ModalContent, StyledModal } from './styled';

interface IModalWrapperProps {
  children: React.ReactNode;
  closeModalClick: () => void;
}

export function ModalWrapper(props: IModalWrapperProps) {
  const { closeModalClick, children } = props;

  const modalRef = useRef(null);

  const onModalClickOutside = () => {
    closeModalClick();
  };

  useLockBodyScroll();
  useOnClickOutside(modalRef, onModalClickOutside);

  return (
    <PortalWrapper>
      <StyledModal data-testid="modal">
        <ModalContent ref={modalRef}>
          {children}
          <CloseButton
            onClick={closeModalClick}
            data-testid="modal-close-button"
          />
        </ModalContent>
      </StyledModal>
    </PortalWrapper>
  );
}
