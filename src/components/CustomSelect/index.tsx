import React, { useState } from 'react';

import { ReactComponent as ChevronIcon } from '@assets/images/chevron.svg';
import { ICurrenciesList } from '@root/types/api';
import { removeCurrencyFromList } from '@utils/helpers';

import {
  Dropdown,
  DropdownItem,
  SelectLabel,
  StyledConverterSelect,
  LabelValue,
  ItemText,
  ItemImage,
} from './styled';

interface IConvertetSelectProps {
  selectedCurrency?: string;
  targetCurrencyCode: string;
  currenciesList: ICurrenciesList;
  setTargetCurrencyCode: (code: string) => void;
}

function CustomSelect(props: IConvertetSelectProps) {
  const { targetCurrencyCode, currenciesList, setTargetCurrencyCode } = props;

  const [isSelectOpened, setIsSelectOpened] = useState(false);

  const handleSelectInputClick = () => {
    setIsSelectOpened((prevState) => !prevState);
  };

  return (
    <StyledConverterSelect onClick={handleSelectInputClick}>
      <SelectLabel $isSelectOpened={isSelectOpened}>
        <LabelValue>
          <ItemText>{currenciesList[targetCurrencyCode].title}</ItemText>
          <ItemImage src={currenciesList[targetCurrencyCode].image} />
        </LabelValue>
        <ChevronIcon />
      </SelectLabel>
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
              <DropdownItem>
                <ItemText>{currenciesList[code].title}</ItemText>
                <ItemImage src={currenciesList[code].image} />
              </DropdownItem>
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </StyledConverterSelect>
  );
}

export default CustomSelect;
