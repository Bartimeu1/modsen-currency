import React from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '@root/GlobalStyle';
import Header from '@components/Header';
import Banner from '@components/Banner';

function Layout() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Banner />
        <Outlet />
      </Container>
    </React.Fragment>
  );
}

export default Layout;
