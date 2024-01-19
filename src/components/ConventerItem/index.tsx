import React from 'react';

import { IconImage,StyledConverterItem, Title } from './styled';

interface IConverterItemProps {
  title: string;
  code: string;
  image: string;
}

function ConverterItem({ title, code, image }: IConverterItemProps) {
  return (
    <StyledConverterItem>
      <IconImage src={image} />
      <Title>{title}</Title>
    </StyledConverterItem>
  );
}

export default ConverterItem;
