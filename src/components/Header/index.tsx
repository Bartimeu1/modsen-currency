import React from 'react';
import { useAppDispatch } from '@root/utils/hooks';
import { toggleTheme } from '@store/features/theme/themeSlice';

import { StyledHeader, LogoImage, ToggleButton } from './styled';
import Navbar from '@components/Navbar';

import logoIcon from '@assets/images/navLogo.png';

function Header() {
  const dispatch = useAppDispatch();

  return (
    <StyledHeader>
      <LogoImage src={logoIcon} alt="logo" />
      <Navbar />
      <ToggleButton
        type="checkbox"
        onClick={() => {
          dispatch(toggleTheme());
        }}
      />
    </StyledHeader>
  );
}

export default Header;
