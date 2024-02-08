import React from 'react';
import { Outlet } from 'react-router-dom';

import { Banner } from '@components/Banner';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Container } from '@root/GlobalStyle';

export function Layout() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <Banner />
        <Outlet />
        <Footer />
      </Container>
    </React.Fragment>
  );
}
