import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '@store/store';

import Map from '@components/Map';
import UpdateInfo from '@components/UpdateInfo';

interface ITimelinePageProps {
  lastUpdateAt: number;
}

class BankCardPage extends Component<ITimelinePageProps> {
  constructor(props: { lastUpdateAt: number }) {
    super(props);
  }

  render() {
    const { lastUpdateAt } = this.props;

    return (
      <>
        <UpdateInfo time={lastUpdateAt} />
        <Map />
      </>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    lastUpdateAt: state.maps.lastUpdateAt,
  };
};

export default connect(mapStateToProps)(BankCardPage);
