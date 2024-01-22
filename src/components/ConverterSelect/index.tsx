import React, { useState } from 'react';

import { ReactComponent as ChevronIcon } from '@assets/images/chevron.svg';
import { ICurrenciesList } from '@root/types/api';
import { removeCurrencyFromList } from '@root/utils/helpers';

import {
  Dropdown,
  DropdownItem,
  InputWrapper,
  StyledConverterSelect,
  TargetValue,
} from './styled';

interface IConvertetSelectProps {
  selectedCurrency: string;
  targetCurrencyCode: string;
  currenciesList: ICurrenciesList;
  setTargetCurrencyCode: (code: string) => void;
}

function ConverterSelect(props: IConvertetSelectProps) {
  const { targetCurrencyCode, currenciesList, setTargetCurrencyCode } = props;

  const [isSelectOpened, setIsSelectOpened] = useState(false);

  const handleSelectInputClick = () => {
    setIsSelectOpened((prevState) => !prevState);
  };

  return (
    <StyledConverterSelect onClick={handleSelectInputClick}>
      <InputWrapper $isSelectOpened={isSelectOpened}>
        <TargetValue>{currenciesList[targetCurrencyCode].title}</TargetValue>
        <ChevronIcon />
      </InputWrapper>
      {isSelectOpened && (
        <Dropdown>
          {Object.keys(
            removeCurrencyFromList(currenciesList, targetCurrencyCode),
          ).map((code) => (
            <DropdownItem
              key={code}
              onClick={() => {
                setTargetCurrencyCode(code);
              }}>
              {currenciesList[code].title}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </StyledConverterSelect>
  );
}

export default ConverterSelect;
