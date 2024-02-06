import React, { useCallback, useState } from 'react';

import { ConverterItem } from '@components/ConventerItem';
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

  const handleConverterItemClick = useCallback(
    (currency: string) => () => {
      setSelectedCurrency(currency);
    },
    [],
  );

  const handleCloseModalClick = () => {
    setSelectedCurrency(null);
  };

  return (
    <StyledConverterList data-testid="converter-list">
      {Object.keys(currencies).map((currency) => {
        const { title, image } = currenciesList[currency];
        const { value } = currencies[currency];
        return (
          <ConverterItem
            key={title}
            rate={value}
            image={image}
            title={title}
            currencyCode={currency}
            onClick={handleConverterItemClick}
          />
        );
      })}
      {selectedCurrency && (
        <ModalPortal closeModalClick={handleCloseModalClick}>
          <ConverterModal selectedCurrency={selectedCurrency} />
        </ModalPortal>
      )}
    </StyledConverterList>
  );
}
