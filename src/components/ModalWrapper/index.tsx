import React, { useEffect, useRef } from 'react';
import { useOnClickOutside } from '@utils/hooks';

import { PortalWrapper } from '@components/PortalWrapper';

import { CloseButton, ModalContent, StyledModal } from './styled';

interface IModalWrapperProps {
  children: React.ReactNode;
  closeModalClick: () => void;
}

export function ModalWrapper(props: IModalWrapperProps) {
  const { closeModalClick, children } = props;

  const modalRef = useRef(null);

  useEffect(() => {
    // const portalRoot = document.createElement('div');
    // portalRoot.setAttribute('data-testid', 'portal');

    // document.body.appendChild(portalRoot);
    document.body.style.overflowY = 'hidden';

    return () => {
      // document.body.removeChild(portalRoot);
      document.body.style.overflowY = 'visible';
    };
  }, []);

  const onModalClickOutside = () => {
    closeModalClick();
  };

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
