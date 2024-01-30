export type IChartData = { x: number; y: string[] }[];

export type IChartDataList = {
  [key: string]: { data: { x: number; y: string[] }[]; lastUpdateAt: number };
};

export interface IChartState {
  chartData: IChartDataList;
  currentCurrency: string;
}

interface IChartResponsive {
  breakpoint: number;
  options: {
    chart?: {
      height: number;
    };
    xaxis: {
      labels: {
        style: {
          fontSize: number;
        };
      };
    };
    yaxis?: {
      labels: {
        style: {
          fontSize: number;
        };
      };
    };
  };
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
  responsive: IChartResponsive[];
}
