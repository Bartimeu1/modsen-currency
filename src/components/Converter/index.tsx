import React from 'react';

import ConverterList from '@components/ConverterList';
import UpdateInfo from '@components/UpdateInfo';
import { requestedCurrencies, baseCurrency } from '@constants/currency';
import { useGetCurrencyRatesQuery } from '@store/features/currency/currencyApi';

import { StyledConverter } from './styled';

function Converter() {
  const { data: currencyResponse } = useGetCurrencyRatesQuery({
    currencies: requestedCurrencies,
    base_currency: baseCurrency,
  });

  return (
    currencyResponse && (
      <StyledConverter>
        <UpdateInfo time={currencyResponse.meta.last_updated_at} />
        <ConverterList currencies={currencyResponse.data} />
      </StyledConverter>
    )
  );
}

export default Converter;
