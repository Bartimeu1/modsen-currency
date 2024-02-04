import { ICurrenciesList } from '@root/types/api';
import { IChartData } from '@root/types/chart';
import { IMapsItem } from '@root/types/maps';

export const convertDateFormat = (dateString: string | number) => {
  const date = new Date(dateString);
  date.setHours(date.getHours() + 3);
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

    convertedValue = Number(convertedValue.toFixed(firstNaturalNumIndex + 2));
  } else {
    convertedValue = Number(convertedValue.toFixed(2));
  }

  return convertedValue.toString();
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
  return (currancyRate * amout).toFixed(3);
};

export const generateChartDataObjects = (): IChartData => {
  const objects = [];
  for (let i = 1; i <= 30; i++) {
    const obj = {
      x: i,
      y: generateRandomChartDataArray(),
    };
    objects.push(obj);
  }

  return objects;
};

const generateRandomChartDataArray = () => {
  const array = [];
  let currentValue = 5000;
  for (let i = 0; i < 4; i++) {
    const change = (Math.random() - 0.5) * 5;
    currentValue += change;
    array.push(currentValue.toFixed(2));
  }
  return array;
};

export const filterPlacesByCurrency = (
  placesList: IMapsItem[],
  currency: string,
) => {
  return placesList.filter((place) => place.currencies.includes(currency));
};

export const validateNumericInput = (
  inputValue: string,
  minValue: string,
  maxValue: string,
) => {
  const numericValue = Number(inputValue);

  return numericValue <= Number(maxValue) && numericValue >= Number(minValue)
    ? ''
    : `The value must be between ${minValue} and ${maxValue}`;
};
