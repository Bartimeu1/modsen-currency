import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Map } from '@components/Map';
import { UpdateInfo } from '@components/UpdateInfo';
import { RootState } from '@store/store';

interface ITimelinePageProps {
  lastUpdateAt: number;
}

class BankCardPageComponent extends Component<ITimelinePageProps> {
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

export const BankCardPage = connect(mapStateToProps)(BankCardPageComponent);
