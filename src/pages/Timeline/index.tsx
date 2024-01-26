import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '@components/Chart';
import ModalPortal from '@components/ModalPortal';
import Observable from '@components/Observable';
import UpdateInfo from '@components/UpdateInfo';
import { IChartDataList } from '@root/types/chart';
import { RootState } from '@store/store';

interface ITimelinePageProps {
  chartData: IChartDataList;
  currentCurrency: string;
}

interface ITimelinePageState {
  isChartFilled: boolean;
}

import { ModalTitle } from './styled';

class TimelinePage extends Component<ITimelinePageProps, ITimelinePageState> {
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

  onCloseModalClick = () => {
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
        <ModalPortal
          isModalVisible={isChartFilled}
          closeModalClick={this.onCloseModalClick}>
          <ModalTitle>График успешно построен ✅</ModalTitle>
        </ModalPortal>
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

export default connect(mapStateToProps)(TimelinePage);
