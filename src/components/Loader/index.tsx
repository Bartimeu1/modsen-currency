import React, { useEffect } from 'react';

import loaderIcon from '@assets/images/loader.png';

import { PortalWrapper } from '@components/PortalWrapper';

import { LoaderImage, StyledLoader } from './styled';

export function Loader() {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'visible';
    };
  }, []);

  return (
    <PortalWrapper>
      <StyledLoader>
        <LoaderImage src={loaderIcon} alt="loader" />
      </StyledLoader>
    </PortalWrapper>
  );
}
