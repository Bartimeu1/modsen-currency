import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '@root/GlobalStyle';
import Header from '@components/Header';

function Layout() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </React.Fragment>
  );
}

export default Layout;
