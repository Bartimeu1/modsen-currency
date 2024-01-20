import React from 'react';

import ConverterItem from '@components/ConventerItem';
import { ICurrencyItem } from '@root/types/api';

import { currencyData } from '@constants/currency';

import { StyledConverterList } from './styled';

interface IConverterListProps {
  currencies: { [currencyCode: string]: ICurrencyItem };
}

function ConverterList({ currencies }: IConverterListProps) {
  
  return (
    <StyledConverterList>
      {Object.keys(currencies).map((currency) => (
        <ConverterItem
          key={currencyData[currency].title}
          code={currency}
          rate={currencies[currency].value}
          image={currencyData[currency].image}
          title={currencyData[currency].title}
        />
      ))}
    </StyledConverterList>
  );
}

export default ConverterList;
