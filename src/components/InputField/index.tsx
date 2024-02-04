import React from 'react';

import {
  FieldTitle,
  Input,
  InputWrapper,
  StyledInputField,
  ValidationText,
} from './styled';

interface IInputFieldProps {
  title: string;
  inputValue: string;
  inputType: string;
  minValue?: string;
  maxValue?: string;
  errorText?: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = (props: IInputFieldProps) => {
  const {
    title,
    inputValue,
    inputType,
    minValue,
    maxValue,
    errorText,
    onInputChange,
  } = props;

  return (
    <StyledInputField>
      <FieldTitle>{title}</FieldTitle>
      <InputWrapper>
        <Input
          onChange={onInputChange}
          value={inputValue}
          type={inputType}
          min={minValue}
          max={maxValue}
        />
        {errorText && <ValidationText>{errorText}</ValidationText>}
      </InputWrapper>
    </StyledInputField>
  );
};
