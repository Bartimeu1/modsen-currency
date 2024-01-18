import React from 'react';

import logoIcon from '@assets/images/bannerLogo.png';
import { bannerSubtitleText } from '@root/constants/text';
import { useAppSelector } from '@root/utils/hooks';

import {
  BannerContent,
  BannerImage,
  BannerSubtitle,
  BannerTitle,
  StyledBanner,
} from './styled';

function Banner() {
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  return (
    <StyledBanner isDarkTheme={currentTheme === 'dark'}>
      <BannerContent>
        <BannerTitle>
          Modsen Currency <br />
          Tracker
        </BannerTitle>
        <BannerSubtitle>{bannerSubtitleText}</BannerSubtitle>
      </BannerContent>
      <BannerImage src={logoIcon} alt="bannerLogo" />
    </StyledBanner>
  );
}

export default Banner;
