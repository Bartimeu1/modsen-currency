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

export const requestedCurrencies = 'EUR,CAD,ARS,JPY,AUD,CNY,TRY,BTC,USD';

export const baseCurrency = 'BYN';

export const currenciesList: ICurrenciesList = {
  USD: { title: 'Commercial Dollar', image: USDimage },
  ARS: { title: 'Argentine Peso', image: ARSimage },
  CAD: { title: 'Canadian Dollar', image: CADimage },
  JPY: { title: 'Yen', image: JPYimage },
  AUD: { title: 'Australian Dollar', image: AUDimage },
  CNY: { title: 'Yuan', image: CNYimage },
  EUR: { title: 'Euro', image: EURimage },
  BTC: { title: 'Bitcoin', image: BTCimage },
  TRY: { title: 'Lira', image: TRYimage },
};
