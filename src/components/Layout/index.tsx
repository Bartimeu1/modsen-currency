import React from 'react';
import { Outlet } from 'react-router-dom';

import Banner from '@components/Banner';
import Header from '@components/Header';
import { Container } from '@root/GlobalStyle';

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
