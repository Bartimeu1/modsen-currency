import {
  ChartFieldStateEnum,
  IChartDataList,
  IChartOptions,
} from '@root/types/chart';

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

export const chartModalFields: {
  id: number;
  title: string;
  minValue: string;
  maxValue: string;
  stateName: ChartFieldStateEnum;
}[] = [
  {
    id: 1,
    title: 'Day',
    minValue: '1',
    maxValue: '30',
    stateName: ChartFieldStateEnum.DayField,
  },
  {
    id: 2,
    title: 'Open value',
    minValue: '1',
    maxValue: '9000',
    stateName: ChartFieldStateEnum.OpenField,
  },
  {
    id: 3,
    title: 'High value',
    minValue: '1',
    maxValue: '9000',
    stateName: ChartFieldStateEnum.HighField,
  },
  {
    id: 4,
    title: 'Low value',
    minValue: '1',
    maxValue: '9000',
    stateName: ChartFieldStateEnum.LowField,
  },
  {
    id: 5,
    title: 'Close value',
    minValue: '1',
    maxValue: '9000',
    stateName: ChartFieldStateEnum.CloseField,
  },
];
