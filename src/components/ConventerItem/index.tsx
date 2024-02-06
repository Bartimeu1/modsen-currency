import React, { memo } from 'react';

import { convertAndFormatCurrencyData } from '@utils/helpers';

import { Content, IconImage, Rate, StyledConverterItem, Title } from './styled';

interface IConverterItemProps {
  currencyCode: string;
  title: string;
  image: string;
  rate: number;
  onClick: any;
}

export const ConverterItem = memo(function ConverterItem(
  props: IConverterItemProps,
) {
  const { title, image, rate, onClick, currencyCode } = props;

  return (
    <StyledConverterItem
      onClick={onClick(currencyCode)}
      data-testid="converter-item">
      <IconImage src={image} />
      <Content>
        <Title>{title}</Title>
        <Rate>R$ {convertAndFormatCurrencyData(rate)}</Rate>
      </Content>
    </StyledConverterItem>
  );
});
