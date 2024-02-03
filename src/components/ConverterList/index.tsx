import React, { useCallback, useState } from 'react';

import ConverterItem from '@components/ConventerItem';
import { currenciesList } from '@constants/currency';
import { ICurrencyItem } from '@root/types/api';

import { ConverterModal } from '../ConverterModal';
import { ModalPortal } from '../ModalPortal';
import { StyledConverterList } from './styled';

interface IConverterListProps {
  currencies: { [currencyCode: string]: ICurrencyItem };
}

export function ConverterList({ currencies }: IConverterListProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

  const handleConverterItemClick = useCallback((currency: string) => {
    setSelectedCurrency(currency);
  }, []);

  const handleCloseModalClick = useCallback(() => {
    setSelectedCurrency(null);
  }, []);

  return (
    <StyledConverterList data-testid="converter-list">
      {Object.keys(currencies).map((currency) => (
        <ConverterItem
          key={currenciesList[currency].title}
          rate={currencies[currency].value}
          image={currenciesList[currency].image}
          title={currenciesList[currency].title}
          onClick={() => handleConverterItemClick(currency)}
        />
      ))}

      <ModalPortal
        closeModalClick={handleCloseModalClick}
        isModalVisible={!!selectedCurrency}>
        {selectedCurrency && (
          <ConverterModal selectedCurrency={selectedCurrency} />
        )}
      </ModalPortal>
    </StyledConverterList>
  );
}
