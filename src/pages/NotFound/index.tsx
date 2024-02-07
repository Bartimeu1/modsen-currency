import React from 'react';

import notFoundImage from '@assets/images/notFound.webp';
import { notFoundText } from '@constants/text';

import { Image, StyledNotFound, Text } from './styled';

export const NotFoundPage = () => {
  return (
    <StyledNotFound>
      <Image src={notFoundImage} alt="notFound" />
      <Text>{notFoundText}</Text>
    </StyledNotFound>
  );
};
