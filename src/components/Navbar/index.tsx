import React from 'react';
import { useLocation } from 'react-router';

import { navbarLinks } from '@root/constants/common';

import { NavbarLink, StyledNavbar } from './styled';

function Navbar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <StyledNavbar>
      {navbarLinks.map((link) => (
        <NavbarLink
          key={link.id}
          to={link.href}
          state={{ isCurrent: pathname === link.href }}>
          {link.title}
        </NavbarLink>
      ))}
    </StyledNavbar>
  );
}

export default Navbar;
