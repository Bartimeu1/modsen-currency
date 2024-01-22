import { ICurrenciesList } from '@root/types/api';

export const convertDateFormat = (dateString: string) => {
  const date = new Date(dateString);
  const hours = date.getUTCHours().toString();
  const minutes = date.getUTCMinutes().toString();

  return `${hours}:${minutes}`;
};

export const convertAndFormatCurrencyData = (rate: number) => {
  let convertedValue = 1 / rate;
  const parts = convertedValue.toString().split('.');

  if (convertedValue < 1) {
    const firstNaturalNumIndex = parts[1]
      .split('')
      .findIndex((number) => number !== '0');

    convertedValue = +convertedValue.toFixed(firstNaturalNumIndex + 2);
  } else {
    convertedValue = +convertedValue.toFixed(2);
  }

  return convertedValue.toString().replace('.', ',');
};

export const removeCurrencyFromList = (
  currenciesList: ICurrenciesList,
  selectedCurrency: string,
) => {
  const editedObject = { ...currenciesList };
  delete editedObject[selectedCurrency];

  return editedObject;
};

export const calculateConverterResult = (
  currancyRate: number,
  amout: number,
) => {
  return currancyRate * amout;
};
