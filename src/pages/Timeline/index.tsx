import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Chart } from '@components/Chart';
import { Toast } from '@components/Toast';
import { UpdateInfo } from '@components/UpdateInfo';
import { chartBuildText } from '@constants/text';
import { IChartDataList } from '@root/types/chart';
import { Observable } from '@services/Observable';
import { RootState } from '@store/store';

interface ITimelinePageProps {
  chartData: IChartDataList;
  currentCurrency: string;
}

interface ITimelinePageState {
  isChartFilled: boolean;
}

class TimelinePageComponent extends Component<
  ITimelinePageProps,
  ITimelinePageState
> {
  constructor(props: ITimelinePageProps) {
    super(props);

    this.state = {
      isChartFilled: false,
    };
  }

  componentDidMount() {
    Observable.addObserver(this);
    this.setState({ isChartFilled: false });
  }

  componentWillUnmount() {
    Observable.removeObserver(this);
  }

  notify = () => {
    this.setState({
      isChartFilled: true,
    });
  };

  closeToast = () => {
    this.setState({
      isChartFilled: false,
    });
  };

  render() {
    const { chartData, currentCurrency } = this.props;
    const { isChartFilled } = this.state;

    return (
      <>
        <UpdateInfo time={chartData[currentCurrency].lastUpdateAt} />
        <Chart />
        <Toast
          message={chartBuildText}
          isVisible={isChartFilled}
          closeToast={this.closeToast}
        />
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    currentCurrency: state.chart.currentCurrency,
    chartData: state.chart.chartData,
  };
};

export const TimelinePage = connect(mapStateToProps)(TimelinePageComponent);
