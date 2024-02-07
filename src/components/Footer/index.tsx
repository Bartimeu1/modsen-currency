import React from 'react';

import logoImage from '@assets/images/navLogo.png';
import { FooterNavigation } from '@components/FooterNavigation';
import {
  appTitleText,
  footerInfoText,
  footerLabelText,
} from '@root/constants/text';

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
      <Label>{footerLabelText}</Label>
    </StyledFooter>
  );
}
