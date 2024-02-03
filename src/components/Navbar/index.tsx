import React from 'react';
import { useLocation } from 'react-router';

import { navbarLinks } from '@root/constants/common';

import { NavbarLink, StyledNavbar } from './styled';

interface INavbarProps {
  onClick: () => void;
}

export function Navbar({ onClick }: INavbarProps) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <StyledNavbar data-testid="navigation-bar">
      {navbarLinks.map((link) => (
        <NavbarLink
          key={link.id}
          data-testid={`navigation-link-${link.title}`}
          to={link.href}
          onClick={onClick}
          state={{ isCurrent: pathname === link.href }}>
          {link.title}
        </NavbarLink>
      ))}
    </StyledNavbar>
  );
}
