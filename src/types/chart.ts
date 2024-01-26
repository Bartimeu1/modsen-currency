export type IChartData = { x: number; y: string[] }[];

export type IChartDataList = {
  [key: string]: { data: { x: number; y: string[] }[]; lastUpdateAt: number };
};

export interface IChartState {
  chartData: IChartDataList;
  currentCurrency: string;
}

export interface IChartOptions {
  chart: {
    id: string;
    type: 'candlestick';
  };
  yaxis: {
    tooltip: {
      enabled: boolean;
    };
  };
}
