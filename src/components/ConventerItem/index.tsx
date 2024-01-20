import React from 'react';

import { StyledConverterItem, IconImage, Content, Title, Rate } from './styled';

import { convertAndFormatCurrencyData } from '@utils/helpers';

interface IConverterItemProps {
  title: string;
  code: string;
  image: string;
  rate: number;
}

function ConverterItem({ title, code, image, rate }: IConverterItemProps) {
  return (
    <StyledConverterItem>
      <IconImage src={image} />
      <Content>
        <Title>{title}</Title>
        <Rate>R$ {convertAndFormatCurrencyData(rate)}</Rate>
      </Content>
    </StyledConverterItem>
  );
}

export default ConverterItem;
