import React from 'react';
import { useLocation } from 'react-router';

import { navbarLinks } from './config';
import { NavbarLink, StyledNavbar } from './styled';

interface INavbarProps {
  onClick: () => void;
}

export function Navbar({ onClick }: INavbarProps) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <StyledNavbar data-testid="navigation-bar">
      {navbarLinks.map(({ id, title, href }) => (
        <NavbarLink
          key={id}
          data-testid={`navigation-link-${title}`}
          to={href}
          onClick={onClick}
          state={{ isCurrent: pathname === href }}>
          {title}
        </NavbarLink>
      ))}
    </StyledNavbar>
  );
}
