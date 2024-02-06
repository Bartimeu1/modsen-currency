import React from 'react';
import { useLocation } from 'react-router';

import { navbarLinks } from './config';
import { NavbarLink, StyledNavbar } from './styled';

interface INavbarProps {
  onLinkClick: () => void;
}

export const Navbar = function Navbar({ onLinkClick }: INavbarProps) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <StyledNavbar data-testid="navigation-bar">
      {navbarLinks.map(({ id, title, href }) => (
        <NavbarLink
          key={id}
          data-testid={`navigation-link-${title}`}
          to={href}
          onClick={() => onLinkClick}
          state={{ isCurrent: pathname === href }}>
          {title}
        </NavbarLink>
      ))}
    </StyledNavbar>
  );
};
