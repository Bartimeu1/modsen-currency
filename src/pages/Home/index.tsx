import React from 'react';

import ConverterList from '@components/ConverterList';
import UpdateInfo from '@components/UpdateInfo';
import Loader from '@components/Loader';
import { baseCurrency, requestedCurrencies } from '@constants/currency';
import { useGetCurrencyRatesQuery } from '@store/features/currency/currencyApi';

function HomePage() {
  const { data: currencyResponse, isLoading } = useGetCurrencyRatesQuery({
    currencies: requestedCurrencies,
    base_currency: baseCurrency,
  });

  if (isLoading) {
    return <Loader />;
  }

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
