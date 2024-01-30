import React, { useState } from 'react';

import { footerNavBlocks } from '@constants/common';

import {
  Block,
  LabelTitle,
  NavigationLink,
  StyledFooterNavigation,
  BlockContent,
  BlockLabel,
} from './styled';

import { ReactComponent as ChevronIcon } from '@assets/images/chevron.svg';

function FooterNavigation() {
  const [visibleDropdowns, setVisibleDropdowns] = useState<{
    [key: number]: boolean;
  }>({});

  const onLabelClick = (id: number) => {
    setVisibleDropdowns((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <StyledFooterNavigation>
      {footerNavBlocks.map((block) => (
        <Block key={block.id}>
          <BlockLabel
            $isDropdownVisible={visibleDropdowns[block.id]}
            onClick={() => onLabelClick(block.id)}>
            <LabelTitle>{block.name}</LabelTitle>
            <ChevronIcon />
          </BlockLabel>
          <BlockContent $isVisible={visibleDropdowns[block.id]}>
            {block &&
              block.links.map((link) => (
                <NavigationLink to={link.href} key={link.id}>
                  {link.title}
                </NavigationLink>
              ))}
          </BlockContent>
        </Block>
      ))}
    </StyledFooterNavigation>
  );
}

export default FooterNavigation;
