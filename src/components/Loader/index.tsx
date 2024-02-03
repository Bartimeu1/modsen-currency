import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import loaderIcon from '@assets/images/loader.png';

import { LoaderImage,StyledLoader } from './styled';

export function Loader() {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'visible';
    };
  }, []);

  return createPortal(
    <StyledLoader>
      <LoaderImage src={loaderIcon} alt="loader" />
    </StyledLoader>,
    document.body,
  );
}
