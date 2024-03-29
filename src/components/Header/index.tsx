import React, { useState } from 'react';

import logoIcon from '@assets/images/navLogo.png';
import { Navbar } from '@components/Navbar';
import { LIGHT_THEME } from '@constants/theme';
import { useAppDispatch, useAppSelector } from '@root/hooks';
import { toggleTheme } from '@store/features/theme/themeSlice';

import {
  BurgerMenu,
  BurgerRow,
  Content,
  LogoImage,
  StyledHeader,
  ToggleButton,
} from './styled';

export function Header() {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const onBurgerClick = () => () => {
    setIsBurgerActive((prevState) => !prevState);
  };

  const onToggleButtonClick = () => () => {
    dispatch(toggleTheme());
  };

  return (
    <StyledHeader data-testid="header">
      <BurgerMenu $isBurgerActive={isBurgerActive} onClick={onBurgerClick()}>
        <BurgerRow />
      </BurgerMenu>
      <Content $isBurgerActive={isBurgerActive}>
        <LogoImage src={logoIcon} alt="logo" />
        <Navbar onLinkClick={onBurgerClick} />
        <ToggleButton
          type="checkbox"
          data-testid="toggle-theme-button"
          $isLightTheme={currentTheme === LIGHT_THEME}
          onClick={onToggleButtonClick()}
        />
      </Content>
    </StyledHeader>
  );
}
