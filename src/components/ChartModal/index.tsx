import React, { Component } from 'react';
import { connect } from 'react-redux';

import { chartModalBlocks } from '@constants/chart';
import {
  deleteDataByDay,
  modifyChartData,
} from '@store/features/chart/chartSlice';

import {
  Block,
  BlockInput,
  BlockTitle,
  Buttons,
  SubmitButton,
  Title,
} from './styled';

interface IChartModalProps {
  modifyChartData: (data: { x: number; y: string[] }) => void;
  closeModalClick: () => void;
  deleteDataByDay: (day: number) => void;
}

interface IChartModalState {
  day: string;
  openValue: string;
  highValue: string;
  lowValue: string;
  closeValue: string;
}

class ChartModal extends Component<IChartModalProps, IChartModalState> {
  constructor(props: IChartModalProps) {
    super(props);

    this.state = {
      day: '1',
      openValue: '5000',
      highValue: '5000',
      lowValue: '5000',
      closeValue: '5000',
    };
  }

  onChangeClick = () => {
    this.props.modifyChartData({
      x: +this.state.day,
      y: [
        this.state.openValue,
        this.state.highValue,
        this.state.lowValue,
        this.state.closeValue,
      ],
    });
    this.props.closeModalClick();
  };

  onDeleteClick = () => {
    this.props.deleteDataByDay(+this.state.day);
    this.props.closeModalClick();
  };

  render() {
    return (
      <>
        <Title>Change chart value</Title>
        {chartModalBlocks.map((block) => (
          <Block key={block.id}>
            <BlockTitle>{block.title}</BlockTitle>
            <BlockInput
              type="number"
              value={this.state[block.stateName as keyof IChartModalState]}
              onChange={(e) =>
                this.setState({ [block.stateName]: e.target.value } as Pick<
                  IChartModalState,
                  keyof IChartModalState
                >)
              }
            />
          </Block>
        ))}
        <Buttons>
          <SubmitButton onClick={this.onChangeClick}>Change</SubmitButton>
          <SubmitButton onClick={this.onDeleteClick}>Delete</SubmitButton>
        </Buttons>
      </>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  modifyChartData,
  deleteDataByDay,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartModal);
