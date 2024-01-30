import React, { useState } from 'react';

import { ReactComponent as ChevronIcon } from '@assets/images/chevron.svg';
import { footerNavBlocks } from '@constants/common';

import {
  Block,
  BlockContent,
  BlockLabel,
  LabelTitle,
  NavigationLink,
  StyledFooterNavigation,
} from './styled';

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
