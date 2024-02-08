import React, { memo } from 'react';

import { convertAndFormatCurrencyData } from '@utils/helpers';

import { Content, IconImage, Rate, StyledConverterItem, Title } from './styled';

interface IConverterItemProps {
  currencyCode: string;
  title: string;
  image: string;
  rate: number;
  alt: string;
  onClick: (code: string) => () => void;
}

export const ConverterItem = memo(function ConverterItem(
  props: IConverterItemProps,
) {
  const { title, image, rate, onClick, currencyCode, alt } = props;

  return (
    <StyledConverterItem
      onClick={onClick(currencyCode)}
      data-testid="converter-item">
      <IconImage src={image} data-testid="converter-item-image" alt={alt} />
      <Content>
        <Title data-testid="converter-item-title">{title}</Title>
        <Rate>R$ {convertAndFormatCurrencyData(rate)}</Rate>
      </Content>
    </StyledConverterItem>
  );
});
