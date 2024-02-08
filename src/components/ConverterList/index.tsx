import React, { useCallback, useState } from 'react';

import { ConverterItem } from '@components/ConventerItem';
import { ConverterModal } from '@components/ConverterModal';
import { ModalWrapper } from '@components/ModalWrapper';
import { currenciesList } from '@constants/currency';
import { ICurrencyItem } from '@root/types/api';

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
        const { title, image, alt } = currenciesList[currency];
        const { value } = currencies[currency];
        return (
          <ConverterItem
            key={title}
            rate={value}
            image={image}
            title={title}
            currencyCode={currency}
            alt={alt}
            onClick={handleConverterItemClick}
          />
        );
      })}
      {selectedCurrency && (
        <ModalWrapper closeModalClick={handleCloseModalClick}>
          <ConverterModal selectedCurrency={selectedCurrency} />
        </ModalWrapper>
      )}
    </StyledConverterList>
  );
}
