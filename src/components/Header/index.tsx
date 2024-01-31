import React, { useState } from 'react';

import logoIcon from '@assets/images/navLogo.png';
import Navbar from '@components/Navbar';
import { useAppDispatch, useAppSelector } from '@root/utils/hooks';
import { toggleTheme } from '@store/features/theme/themeSlice';

import {
  BurgerMenu,
  BurgerRow,
  Content,
  LogoImage,
  StyledHeader,
  ToggleButton,
} from './styled';

function Header() {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const onBurgerClick = () => {
    setIsBurgerActive((prevState) => !prevState);
  };

  return (
    <StyledHeader>
      <BurgerMenu $isBurgerActive={isBurgerActive} onClick={onBurgerClick}>
        <BurgerRow />
      </BurgerMenu>
      <Content $isBurgerActive={isBurgerActive}>
        <LogoImage src={logoIcon} alt="logo" />
        <Navbar onClick={() => setIsBurgerActive(false)} />
        <ToggleButton
          type="checkbox"
          data-testid="toggle-theme-button"
          $isLightTheme={currentTheme === 'light'}
          onClick={() => {
            dispatch(toggleTheme());
          }}
        />
      </Content>
    </StyledHeader>
  );
}

export default Header;
