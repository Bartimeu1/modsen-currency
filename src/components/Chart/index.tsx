import React, { Component } from 'react';
import ApexChart from 'react-apexcharts';
import { connect } from 'react-redux';

import CustomSelect from '@components/CustomSelect';
import ModalPortal from '@components/ModalPortal';
import { chartOptions } from '@constants/chart';
import { currenciesList } from '@root/constants/currency';
import { IChartDataList } from '@root/types/chart';
import {
  generateData,
  resetData,
  setCurrentCurrency,
} from '@store/features/chart/chartSlice';
import { RootState } from '@store/store';

import ChartModal from '../ChartModal';
import { Controller, ControllerButton, StyledChart } from './styled';

interface IChartProps {
  chartData: IChartDataList;
  currentCurrency: string;
  generateData: () => void;
  resetData: () => void;
  setCurrentCurrency: (code: string) => void;
}

interface IChartState {
  isModalVisible: boolean;
}

class Chart extends Component<IChartProps, IChartState> {
  constructor(props: IChartProps) {
    super(props);

    this.state = {
      isModalVisible: false,
    };
  }

  onGenerateValuesClick = () => {
    this.props.generateData();
  };

  onResetValuesClick = () => {
    this.props.resetData();
  };

  onChangeValueClick = () => {
    this.setState((prevState) => {
      return {
        isModalVisible: !prevState.isModalVisible,
      };
    });
  };

  handleCloseModalClick = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {
    const { setCurrentCurrency, currentCurrency, chartData } = this.props;
    const { isModalVisible } = this.state;

    return (
      <StyledChart>
        <Controller>
          <CustomSelect
            targetCurrencyCode={currentCurrency}
            setTargetCurrencyCode={setCurrentCurrency}
            currenciesList={currenciesList}
          />
          <ControllerButton onClick={this.onGenerateValuesClick}>
            Generate values
          </ControllerButton>
          <ControllerButton onClick={this.onResetValuesClick}>
            Reset values
          </ControllerButton>
          <ControllerButton onClick={this.onChangeValueClick}>
            Change value
          </ControllerButton>
        </Controller>
        <ApexChart
          type="candlestick"
          options={chartOptions}
          series={[
            {
              data: chartData[currentCurrency].data,
            },
          ]}
          height={500}
        />
        <ModalPortal
          isModalVisible={isModalVisible}
          closeModalClick={this.handleCloseModalClick}>
          <ChartModal closeModalClick={this.handleCloseModalClick} />
        </ModalPortal>
      </StyledChart>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    currentCurrency: state.chart.currentCurrency,
    chartData: state.chart.chartData,
  };
};

const mapDispatchToProps = {
  generateData,
  resetData,
  setCurrentCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chart);
