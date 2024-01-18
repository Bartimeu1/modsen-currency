import React from 'react';

import { footerNavBlocks } from '@constants/common';

import {
  Block,
  BlockTitle,
  NavigationLink,
  StyledFooterNavigation,
} from './styled';

function FooterNavigation() {
  return (
    <StyledFooterNavigation>
      {footerNavBlocks.map((block) => (
        <Block key={block.id}>
          <BlockTitle>{block.name}</BlockTitle>
          {block &&
            block.links.map((link) => (
              <NavigationLink to={link.href} key={link.id}>
                {link.title}
              </NavigationLink>
            ))}
        </Block>
      ))}
    </StyledFooterNavigation>
  );
}

export default FooterNavigation;
