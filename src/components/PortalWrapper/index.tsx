import React from 'react';
import { createPortal } from 'react-dom';

interface IPortalWrapperProps {
  children: React.ReactNode;
}

export function PortalWrapper({ children }: IPortalWrapperProps) {
  return createPortal(<>{children}</>, document.body);
}
