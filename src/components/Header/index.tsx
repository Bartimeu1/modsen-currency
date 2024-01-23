import React from 'react';

import logoIcon from '@assets/images/navLogo.png';
import Navbar from '@components/Navbar';
import { useAppDispatch, useAppSelector } from '@root/utils/hooks';
import { toggleTheme } from '@store/features/theme/themeSlice';

import { LogoImage, StyledHeader, ToggleButton } from './styled';

function Header() {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  return (
    <StyledHeader>
      <LogoImage src={logoIcon} alt="logo" />
      <Navbar />
      <ToggleButton
        type="checkbox"
        $isLightTheme={currentTheme === 'light'}
        onClick={() => {
          dispatch(toggleTheme());
        }}
      />
    </StyledHeader>
  );
}

export default Header;
