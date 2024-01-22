import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import ConverterSelect from '@components/ConverterSelect';
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
  CloseButton,
  Content,
  StyledConverterModal,
  Title,
} from './styled';

interface IConverItemProps {
  selectedCurrency: string;
  handleCloseModalClick: React.MouseEventHandler<
    HTMLDivElement | HTMLButtonElement
  >;
}

function ConverterModal(props: IConverItemProps) {
  const { selectedCurrency, handleCloseModalClick } = props;

  const [targetCurrencyCode, setTargetCurrencyCode] = useState('USD');
  const [amountInputValue, setAmountInputValue] = useState('1');

  const { data: currencyResponse, refetch } = useGetCurrencyRatesQuery({
    currencies: targetCurrencyCode,
    base_currency: selectedCurrency,
  });

  useEffect(() => {
    refetch();
  }, [selectedCurrency, targetCurrencyCode, amountInputValue, refetch]);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'visible';
    };
  }, []);

  const onModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const onAmountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmountInputValue(e.target.value);
  };

  const resultValue =
    currencyResponse &&
    currencyResponse.data[targetCurrencyCode] &&
    currencyResponse.data[targetCurrencyCode].value &&
    calculateConverterResult(
      currencyResponse.data[targetCurrencyCode].value,
      +amountInputValue,
    );

  return createPortal(
    <StyledConverterModal onClick={handleCloseModalClick}>
      <Content onClick={(e) => onModalContentClick(e)}>
        <Title>Currency converter</Title>
        <Block>
          <BlockTitle>Base currency:</BlockTitle>
          <BlockText>{currenciesList[selectedCurrency].title}</BlockText>
        </Block>
        <Block>
          <BlockTitle>Convert to:</BlockTitle>
          <ConverterSelect
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
            type="number"
            value={amountInputValue}
            onChange={(e) => onAmountInputChange(e)}
          />
        </Block>
        <Block>
          <BlockTitle>Result:</BlockTitle>
          <BlockText>{resultValue}</BlockText>
        </Block>
        <CloseButton onClick={handleCloseModalClick} />
      </Content>
    </StyledConverterModal>,
    document.body,
  );
}

export default ConverterModal;
