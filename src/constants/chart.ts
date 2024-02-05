import { IChartDataList, IChartOptions } from '@root/types/chart';

export const baseChartValue = 5000;

export const chartOptions: IChartOptions = {
  chart: {
    id: 'currency-chart',
    type: 'candlestick',
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
  responsive: [
    {
      breakpoint: 600,
      options: {
        chart: {
          height: 300,
        },
        xaxis: {
          labels: {
            style: {
              fontSize: 10,
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              fontSize: 10,
            },
          },
        },
      },
    },
  ],
};

export const chartDataCurrenciesList: IChartDataList = {
  USD: { data: [], lastUpdateAt: 0 },
  ARS: { data: [], lastUpdateAt: 0 },
  CAD: { data: [], lastUpdateAt: 0 },
  JPY: { data: [], lastUpdateAt: 0 },
  AUD: { data: [], lastUpdateAt: 0 },
  CNY: { data: [], lastUpdateAt: 0 },
  EUR: { data: [], lastUpdateAt: 0 },
  BTC: { data: [], lastUpdateAt: 0 },
  TRY: { data: [], lastUpdateAt: 0 },
};
