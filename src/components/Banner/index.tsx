import React from 'react';

import logoIcon from '@assets/images/bannerLogo.png';
import { appTitleText, bannerSubtitleText } from '@constants/text';
import { useAppSelector } from '@root/utils/hooks';

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
    <StyledBanner $isDarkTheme={currentTheme === 'dark'}>
      <BannerContent>
        <BannerTitle>{appTitleText}</BannerTitle>
        <BannerSubtitle>{bannerSubtitleText}</BannerSubtitle>
      </BannerContent>
      <BannerImage src={logoIcon} alt="bannerLogo" />
    </StyledBanner>
  );
}
