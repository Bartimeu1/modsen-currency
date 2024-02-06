import React, { useRef, useState, memo } from 'react';

import { ReactComponent as ChevronIcon } from '@assets/images/chevron.svg';
import { ICurrenciesList } from '@root/types/api';
import { removeCurrencyFromList } from '@utils/helpers';
import { useOnClickOutside } from '@utils/hooks';

import {
  Dropdown,
  DropdownItem,
  ItemImage,
  ItemText,
  LabelValue,
  SelectLabel,
  StyledSelect,
} from './styled';

interface IConvertetSelectProps {
  selectedCurrency?: string;
  targetCurrencyCode: string;
  currenciesList: ICurrenciesList;
  setTargetCurrencyCode: (code: string) => () => void;
}

export const CustomSelect = memo(function CustomSelect(
  props: IConvertetSelectProps,
) {
  const { targetCurrencyCode, currenciesList, setTargetCurrencyCode } = props;

  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const selectRef = useRef(null);

  const handleSelectInputClick = () => {
    setIsSelectOpened((prevState) => !prevState);
  };

  const onSelectClickOutside = () => {
    setIsSelectOpened(false);
  };

  useOnClickOutside(selectRef, onSelectClickOutside);

  return (
    <StyledSelect
      onClick={handleSelectInputClick}
      ref={selectRef}
      data-testid="select">
      <SelectLabel $isSelectOpened={isSelectOpened}>
        <LabelValue>
          <ItemText>{currenciesList[targetCurrencyCode].title}</ItemText>
          <ItemImage src={currenciesList[targetCurrencyCode].image} />
        </LabelValue>
        <ChevronIcon />
      </SelectLabel>
      {isSelectOpened && (
        <Dropdown data-testid="select-dropdown">
          {Object.keys(
            removeCurrencyFromList(currenciesList, targetCurrencyCode),
          ).map((code) => (
            <DropdownItem
              key={code}
              data-testid="select-dropdown-item"
              onClick={setTargetCurrencyCode(code)}>
              <DropdownItem>
                <ItemText>{currenciesList[code].title}</ItemText>
                <ItemImage src={currenciesList[code].image} />
              </DropdownItem>
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </StyledSelect>
  );
});
