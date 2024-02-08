import React from 'react';
import { useLockBodyScroll } from '@root/hooks';

import loaderIcon from '@assets/images/loader.png';
import { PortalWrapper } from '@components/PortalWrapper';

import { LoaderImage, StyledLoader } from './styled';

export function Loader() {
  useLockBodyScroll();

  return (
    <PortalWrapper>
      <StyledLoader>
        <LoaderImage src={loaderIcon} alt="loader" />
      </StyledLoader>
    </PortalWrapper>
  );
}
