import React, { PureComponent } from 'react';
import ApexChart from 'react-apexcharts';
import { connect } from 'react-redux';

import noResultsImage from '@assets/images/noResults.png';
import { CustomSelect } from '@components/CustomSelect';
import { ModalWrapper } from '@components/ModalWrapper';
import { chartOptions } from '@constants/chart';
import { currenciesList } from '@root/constants/currency';
import { IChartDataList } from '@root/types/chart';
import {
  generateData,
  resetData,
  setCurrentCurrency,
} from '@store/features/chart/chartSlice';
import { RootState } from '@store/store';

import { ChartModal } from '../ChartModal';
import {
  Controller,
  ControllerButton,
  NoResults,
  NoResultsImage,
  NoResultsText,
  StyledChart,
} from './styled';

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

class ChartComponent extends PureComponent<IChartProps, IChartState> {
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

  onSelectChange = (code: string) => () => {
    this.props.setCurrentCurrency(code);
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
    const { currentCurrency, chartData } = this.props;
    const { isModalVisible } = this.state;

    return (
      <StyledChart data-testid="chart-wrapper">
        <Controller data-testid="chart-controller">
          <CustomSelect
            targetCurrencyCode={currentCurrency}
            setTargetCurrencyCode={this.onSelectChange}
            currenciesList={currenciesList}
          />
          <ControllerButton
            onClick={this.onGenerateValuesClick}
            data-testid="chart-button-generate">
            Generate values
          </ControllerButton>
          <ControllerButton
            onClick={this.onResetValuesClick}
            data-testid="chart-button-reset">
            Reset values
          </ControllerButton>
          <ControllerButton
            onClick={this.onChangeValueClick}
            data-testid="chart-button-change">
            Change value
          </ControllerButton>
        </Controller>
        {chartData[currentCurrency].data.length > 0 ? (
          <ApexChart
            type="candlestick"
            options={chartOptions}
            data-testid="chart"
            series={[
              {
                data: chartData[currentCurrency].data,
              },
            ]}
            height={500}
          />
        ) : (
          <NoResults data-testid="empty-chart-image">
            <NoResultsText>Chart is empty</NoResultsText>
            <NoResultsImage src={noResultsImage} alt="noResults" />
          </NoResults>
        )}
        {isModalVisible && (
          <ModalWrapper closeModalClick={this.handleCloseModalClick}>
            <ChartModal closeModalClick={this.handleCloseModalClick} />
          </ModalWrapper>
        )}
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

export const Chart = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChartComponent);
