import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '@root/GlobalStyle';

function Layout() {
  return (
    <React.Fragment>
      <Container>
        <Outlet />
      </Container>
    </React.Fragment>
  );
}

export default Layout;
