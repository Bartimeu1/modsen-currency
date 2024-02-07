import React, { useState } from 'react';

import { ReactComponent as ChevronIcon } from '@assets/images/chevron.svg';

import { footerNavBlocks } from './config';
import {
  Block,
  BlockContent,
  BlockLabel,
  LabelTitle,
  NavigationLink,
  StyledFooterNavigation,
} from './styled';

export function FooterNavigation() {
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
    <StyledFooterNavigation data-testid="footer-navigation">
      {footerNavBlocks.map((block) => {
        const { id, name, links } = block;
        return (
          <Block key={id}>
            <BlockLabel
              $isDropdownVisible={visibleDropdowns[id]}
              onClick={() => onLabelClick(id)}>
              <LabelTitle>{name}</LabelTitle>
              <ChevronIcon />
            </BlockLabel>
            <BlockContent $isVisible={visibleDropdowns[id]}>
              {block &&
                links.map(({ id, href, title }) => (
                  <NavigationLink to={href} key={id}>
                    {title}
                  </NavigationLink>
                ))}
            </BlockContent>
          </Block>
        );
      })}
    </StyledFooterNavigation>
  );
}
