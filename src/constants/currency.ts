import ARSimage from '@assets/images/ARS.png';
import AUDimage from '@assets/images/AUD.png';
import BTCimage from '@assets/images/BTC.png';
import CADimage from '@assets/images/CAD.png';
import CNYimage from '@assets/images/CNY.png';
import EURimage from '@assets/images/EUR.png';
import JPYimage from '@assets/images/JPY.png';
import TRYimage from '@assets/images/TRY.png';
import USDimage from '@assets/images/USD.png';
import { ICurrenciesList } from '@root/types/api';

export const baseCurrencyValue = 1;

export const requestedCurrencies = 'EUR,CAD,ARS,JPY,AUD,CNY,TRY,BTC,USD';

export const baseCurrency = 'BYN';

export const displayThreshold = 1;

export const currenciesList: ICurrenciesList = {
  USD: { title: 'Commercial Dollar', image: USDimage, alt: 'USD' },
  ARS: { title: 'Argentine Peso', image: ARSimage, alt: 'ARG' },
  CAD: { title: 'Canadian Dollar', image: CADimage, alt: 'CAD' },
  JPY: { title: 'Yen', image: JPYimage, alt: 'JPY' },
  AUD: { title: 'Australian Dollar', image: AUDimage, alt: 'AUD' },
  CNY: { title: 'Yuan', image: CNYimage, alt: 'CNY' },
  EUR: { title: 'Euro', image: EURimage, alt: 'EUR' },
  BTC: { title: 'Bitcoin', image: BTCimage, alt: 'BTC' },
  TRY: { title: 'Lira', image: TRYimage, alt: 'TRY' },
};
