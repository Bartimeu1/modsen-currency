import React from 'react';
import { useState } from 'react';

import { navbarLinks } from '@root/constants/common';
import { StyledNavbar, NavbarLink } from './styled';

function Navbar() {
  const [currentPageId, setCurrentPageId] = useState(1);

  const linkClickHandler = (id: number) => {
    setCurrentPageId(id);
  };

  return (
    <StyledNavbar>
      {navbarLinks.map((link) => (
        <NavbarLink
          key={link.id}
          to={link.href}
          state={{ isCurrent: currentPageId === link.id }}
          onClick={() => linkClickHandler(link.id)}>
          {link.title}
        </NavbarLink>
      ))}
    </StyledNavbar>
  );
}

export default Navbar;
