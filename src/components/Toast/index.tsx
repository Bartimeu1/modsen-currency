import React, { useEffect } from 'react';

import { StyledToast, ToastText } from './styled';

import { PortalWrapper } from '@components/PortalWrapper';

interface IToastProps {
  message: string;
  isVisible: boolean;
  closeToast: () => void;
}

export function Toast(props: IToastProps) {
  const { message, closeToast, isVisible } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      closeToast();
    }, 3000);

    return () => clearTimeout(timer);
  }, [isVisible, closeToast]);

  return (
    isVisible && (
      <PortalWrapper>
        <StyledToast>
          <ToastText>{message}</ToastText>
        </StyledToast>
      </PortalWrapper>
    )
  );
}
