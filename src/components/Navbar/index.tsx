import React from 'react';
import { useLocation } from 'react-router';

import { navbarLinks } from '@root/constants/common';

import { NavbarLink, StyledNavbar } from './styled';

interface INavbarProps {
  onClick: () => void;
}

function Navbar({ onClick }: INavbarProps) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <StyledNavbar>
      {navbarLinks.map((link) => (
        <NavbarLink
          key={link.id}
          to={link.href}
          onClick={onClick}
          state={{ isCurrent: pathname === link.href }}>
          {link.title}
        </NavbarLink>
      ))}
    </StyledNavbar>
  );
}

export default Navbar;
