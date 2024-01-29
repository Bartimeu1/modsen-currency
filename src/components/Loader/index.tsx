import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { StyledLoader, LoaderImage } from './styled';
import loaderIcon from '@assets/images/loader.png';

function Loader() {
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

export default Loader;
