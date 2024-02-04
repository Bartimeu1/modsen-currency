import React, { useEffect, useMemo,useState } from 'react';

import { CustomSelect } from '@components/CustomSelect';
import { InputField } from '@components/InputField';
import { currenciesList } from '@constants/currency';
import { useGetCurrencyRatesQuery } from '@store/features/currency/currencyApi';
import { validateNumericInput } from '@utils/helpers';
import {
  calculateConverterResult,
  removeCurrencyFromList,
} from '@utils/helpers';

import {
  Block,
  BlockText,
  BlockTitle,
  Result,
  ResultCurrencyImage,
  Title,
} from './styled';

interface IConverItemProps {
  selectedCurrency: string;
}

export function ConverterModal({ selectedCurrency }: IConverItemProps) {
  const [targetCurrencyCode, setTargetCurrencyCode] = useState(
    selectedCurrency === 'USD' ? 'EUR' : 'USD',
  );
  const [amountInputValue, setAmountInputValue] = useState('1');
  const [inputValidationText, setInputValidationText] = useState('');

  const {
    data: currencyResponse,
    isLoading: requestLoading,
    isError: requestError,
    refetch,
  } = useGetCurrencyRatesQuery({
    currencies: targetCurrencyCode,
    base_currency: selectedCurrency,
  });

  useEffect(() => {
    refetch();
  }, [selectedCurrency, targetCurrencyCode, refetch]);

  const onAmountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    setInputValidationText(validateNumericInput(inputValue, '1', '10000'));
    setAmountInputValue(() => inputValue);
  };

  const calculateResult = () => {
    if (currencyResponse && !inputValidationText) {
      return calculateConverterResult(
        currencyResponse?.data[targetCurrencyCode]?.value,
        Number(amountInputValue),
      );
    }
    return null;
  };

  const resultValue = useMemo(
    () => calculateResult(),
    [currencyResponse, amountInputValue, inputValidationText],
  );
  const isResultValid = !requestError && resultValue;

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
      <InputField
        title="Amount:"
        inputType="number"
        minValue="1"
        maxValue="10000"
        errorText={inputValidationText}
        inputValue={amountInputValue}
        onInputChange={onAmountInputChange}
      />
      <Block>
        <BlockTitle>Result:</BlockTitle>
        <Result>
          <BlockText data-testid="currency-modal-result">
            {requestLoading && 'loading...'}
            {isResultValid ? resultValue : '-'}
          </BlockText>
          {resultValue && (
            <ResultCurrencyImage
              src={currenciesList[targetCurrencyCode].image}
              alt="resultCurrency"
            />
          )}
        </Result>
      </Block>
    </>
  );
}
