import React from 'react';

import logoImage from '@assets/images/navLogo.png';
import {
  appTitleText,
  footerInfoText,
  footerLabelText,
} from '@root/constants/text';

import FooterNavigation from '@components/FooterNavigation';
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

function Footer() {
  return (
    <StyledFooter>
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

export default Footer;
