import React from 'react';

import ConverterList from '@components/ConverterList';
import UpdateInfo from '@components/UpdateInfo';
import { baseCurrency, requestedCurrencies } from '@constants/currency';
import { useGetCurrencyRatesQuery } from '@store/features/currency/currencyApi';

function HomePage() {
  const { data: currencyResponse } = useGetCurrencyRatesQuery({
    currencies: requestedCurrencies,
    base_currency: baseCurrency,
  });

  return (
    currencyResponse && (
      <>
        <UpdateInfo time={currencyResponse.meta.last_updated_at} />
        <ConverterList currencies={currencyResponse.data} />
      </>
    )
  );
}

export default HomePage;
