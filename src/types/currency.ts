export interface ICurrencyItem {
  code: string;
  value: number;
}

export interface ICurrencyResponse {
  meta: {
    last_updated_at: string;
  };
  data: {
    [currencyCode: string]: ICurrencyItem;
  };
}

export type IChartData = { x: number; y: string[] }[];

export type IChartDataList = {
  [key: string]: IChartData;
};

export interface ICurrenciesList {
  [key: string]: { title: string; image: string, chartData?: IChartDataList };
}

export interface IChartState {
  chartData: ICurrenciesList;
  currentCurrency: string;
}

