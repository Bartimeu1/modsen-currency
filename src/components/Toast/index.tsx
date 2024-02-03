import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

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
    isVisible &&
    createPortal(
      <StyledToast>
        <ToastText>{message}</ToastText>
      </StyledToast>,
      document.body,
    )
  );
}
