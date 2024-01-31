import React from 'react';

import { convertAndFormatCurrencyData } from '@utils/helpers';

import { Content, IconImage, Rate, StyledConverterItem, Title } from './styled';

interface IConverterItemProps {
  title: string;
  image: string;
  rate: number;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function ConverterItem({ title, image, rate, onClick }: IConverterItemProps) {
  return (
    <StyledConverterItem onClick={onClick} data-testid="converter-item">
      <IconImage src={image} />
      <Content>
        <Title>{title}</Title>
        <Rate>R$ {convertAndFormatCurrencyData(rate)}</Rate>
      </Content>
    </StyledConverterItem>
  );
}

export default React.memo(ConverterItem);
