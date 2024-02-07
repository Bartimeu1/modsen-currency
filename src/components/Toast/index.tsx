import React, { useEffect } from 'react';

import { PortalWrapper } from '@components/PortalWrapper';

import { StyledToast, ToastText } from './styled';

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
        <StyledToast data-testid="toast">
          <ToastText>{message}</ToastText>
        </StyledToast>
      </PortalWrapper>
    )
  );
}
