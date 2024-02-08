import React from 'react';

import logoImage from '@assets/images/navLogo.png';
import { FooterNavigation } from '@components/FooterNavigation';
import { appTitleText, footerInfoText } from '@root/constants/text';
import { getCurrentYear } from '@utils/helpers';

import {
  Content,
  ContentText,
  Info,
  Label,
  Logo,
  LogoImage,
  LogoTitle,
  StyledFooter,
} from './styled';

export function Footer() {
  const currentYear = getCurrentYear();

  return (
    <StyledFooter data-testid="footer">
      <Content>
        <ContentText>
          <Logo>
            <LogoImage src={logoImage} />
            <LogoTitle>{appTitleText}</LogoTitle>
          </Logo>
          <Info>{footerInfoText}</Info>
        </ContentText>
        <FooterNavigation />
      </Content>
      <Label>Startsup © 2023-{currentYear}, All Rights Reserved</Label>
    </StyledFooter>
  );
}
