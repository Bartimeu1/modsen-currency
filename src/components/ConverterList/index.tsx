import React, { useState } from 'react';

import ConverterItem from '@components/ConventerItem';
import { currenciesList } from '@constants/currency';
import { ICurrencyItem } from '@root/types/api';

import ConverterModal from '../ConverterModal';
import { StyledConverterList } from './styled';

interface IConverterListProps {
  currencies: { [currencyCode: string]: ICurrencyItem };
}

function ConverterList({ currencies }: IConverterListProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);

  const handleConverterItemClick = (currency: string) => {
    setSelectedCurrency(currency);
  };

  const handleCloseModalClick = () => {
    setSelectedCurrency(null);
  };

  return (
    <StyledConverterList>
      {Object.keys(currencies).map((currency) => (
        <ConverterItem
          key={currenciesList[currency].title}
          rate={currencies[currency].value}
          image={currenciesList[currency].image}
          title={currenciesList[currency].title}
          onClick={() => handleConverterItemClick(currency)}
        />
      ))}

      {selectedCurrency && (
        <ConverterModal
          selectedCurrency={selectedCurrency}
          handleCloseModalClick={handleCloseModalClick}
        />
      )}
    </StyledConverterList>
  );
}

export default ConverterList;
