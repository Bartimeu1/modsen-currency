import {
  baseChartValue,
  chartDataMultiplier,
  chartDataPoints,
  chartDataShift,
  maxChartDataValues,
} from '@constants/chart';
import { baseCurrencyValue, displayThreshold } from '@constants/currency';
import { decimalPlaces,timeZoneOffset } from '@constants/formatting';
import { ICurrenciesList } from '@root/types/api';
import { IChartData } from '@root/types/chart';
import { IMapsItem } from '@root/types/maps';

export const convertDateFormat = (dateString: string | number) => {
  const date = new Date(dateString);
  date.setHours(date.getHours() + timeZoneOffset);
  const hours = date.getUTCHours().toString();
  const minutes = date.getUTCMinutes().toString();

  return `${hours}:${minutes}`;
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const convertAndFormatCurrencyData = (rate: number) => {
  let convertedValue = baseCurrencyValue / rate;
  const parts = convertedValue.toString().split('.');

  if (convertedValue < displayThreshold) {
    const firstNaturalNumIndex = parts[1]
      .split('')
      .findIndex((number) => number !== '0');

    convertedValue = Number(
      convertedValue.toFixed(firstNaturalNumIndex + decimalPlaces),
    );
  } else {
    convertedValue = Number(convertedValue.toFixed(decimalPlaces));
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
  currencyRate: number,
  amount: number,
) => {
  return (currencyRate * amount).toFixed(decimalPlaces);
};

export const generateChartDataObjects = (): IChartData => {
  const objects = [];
  for (let i = 1; i <= maxChartDataValues; i++) {
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
  let currentValue = baseChartValue;
  for (let i = 0; i < chartDataPoints; i++) {
    const change = (Math.random() - chartDataShift) * chartDataMultiplier;
    currentValue += change;
    array.push(currentValue.toFixed(decimalPlaces));
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
