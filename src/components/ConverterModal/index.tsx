import React, { useEffect, useState } from 'react';

import { CustomSelect } from '@components/CustomSelect';
import { currenciesList } from '@constants/currency';
import { useGetCurrencyRatesQuery } from '@store/features/currency/currencyApi';
import {
  calculateConverterResult,
  removeCurrencyFromList,
} from '@utils/helpers';

import {
  AmountInput,
  Block,
  BlockText,
  BlockTitle,
  Title,
  Result,
  ResultCurrencyImage,
} from './styled';

interface IConverItemProps {
  selectedCurrency: string;
}

export function ConverterModal({ selectedCurrency }: IConverItemProps) {
  const [targetCurrencyCode, setTargetCurrencyCode] = useState(
    selectedCurrency === 'USD' ? 'EUR' : 'USD',
  );
  const [amountInputValue, setAmountInputValue] = useState('1');

  const { data: currencyResponse, refetch } = useGetCurrencyRatesQuery({
    currencies: targetCurrencyCode,
    base_currency: selectedCurrency,
  });

  useEffect(() => {
    refetch();
  }, [selectedCurrency, targetCurrencyCode, amountInputValue, refetch]);

  const onAmountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountInputValue(e.target.value);
  };

  const resultValue =
    currencyResponse &&
    calculateConverterResult(
      currencyResponse?.data[targetCurrencyCode]?.value,
      +amountInputValue,
    );

  return (
    <>
      <Title>Currency converter</Title>
      <Block>
        <BlockTitle>Base currency:</BlockTitle>
        <BlockText>{currenciesList[selectedCurrency].title}</BlockText>
      </Block>
      <Block>
        <BlockTitle>Convert to:</BlockTitle>
        <CustomSelect
          selectedCurrency={selectedCurrency}
          targetCurrencyCode={targetCurrencyCode}
          setTargetCurrencyCode={setTargetCurrencyCode}
          currenciesList={removeCurrencyFromList(
            currenciesList,
            selectedCurrency,
          )}
        />
      </Block>
      <Block>
        <BlockTitle>Amount:</BlockTitle>
        <AmountInput
          data-testid="currency-amount-input"
          type="number"
          value={amountInputValue}
          onChange={(e) => onAmountInputChange(e)}
        />
      </Block>
      <Block>
        <BlockTitle>Result:</BlockTitle>
        <Result>
          <BlockText data-testid="currency-modal-result">
            {resultValue || 'loading...'}
          </BlockText>
          <ResultCurrencyImage
            src={currenciesList[targetCurrencyCode].image}
            alt="resultCurrency"
          />
        </Result>
      </Block>
    </>
  );
}
