import { ChartFieldStateEnum } from "@root/types/chart";

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