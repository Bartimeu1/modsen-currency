import React from 'react';

import logoIcon from '@assets/images/bannerLogo.png';
import { appTitleText, bannerSubtitleText } from '@constants/text';

import {
  BannerContent,
  BannerImage,
  BannerSubtitle,
  BannerTitle,
  StyledBanner,
} from './styled';

export function Banner() {
  return (
    <StyledBanner data-testid="banner">
      <BannerContent>
        <BannerTitle>{appTitleText}</BannerTitle>
        <BannerSubtitle>{bannerSubtitleText}</BannerSubtitle>
      </BannerContent>
      <BannerImage src={logoIcon} alt="bannerLogo" />
    </StyledBanner>
  );
}
