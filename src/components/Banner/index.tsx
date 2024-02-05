import React from 'react';

import logoIcon from '@assets/images/bannerLogo.png';
import { appTitleText, bannerSubtitleText } from '@constants/text';
import { useAppSelector } from '@root/utils/hooks';
import { DARK_THEME } from '@constants/theme';

import {
  BannerContent,
  BannerImage,
  BannerSubtitle,
  BannerTitle,
  StyledBanner,
} from './styled';

export function Banner() {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  return (
    <StyledBanner $isDarkTheme={currentTheme === DARK_THEME}>
      <BannerContent>
        <BannerTitle>{appTitleText}</BannerTitle>
        <BannerSubtitle>{bannerSubtitleText}</BannerSubtitle>
      </BannerContent>
      <BannerImage src={logoIcon} alt="bannerLogo" />
    </StyledBanner>
  );
}
