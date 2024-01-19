import React from 'react';

import Converter from '@root/components/Converter';

import { StyledHomePage } from './styled';

function HomePage() {
  return (
    <StyledHomePage>
      <Converter />
    </StyledHomePage>
  );
}

export default HomePage;
