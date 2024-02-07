import React, { Component } from 'react';
import { connect } from 'react-redux';

import { InputField } from '@components/InputField';
import { ChartFieldStateEnum } from '@root/types/chart';
import {
  deleteDataByDay,
  modifyChartData,
} from '@store/features/chart/chartSlice';
import { validateNumericInput } from '@utils/helpers';

import { chartModalFields } from './config';
import { Buttons, SubmitButton, Title } from './styled';

interface IChartModalProps {
  modifyChartData: (data: { x: number; y: string[] }) => void;
  closeModalClick: () => void;
  deleteDataByDay: (day: number) => void;
}

type ChartModalState = {
  [key in ChartFieldStateEnum]: { value: string; validationText: string };
};

class ChartModalComponent extends Component<IChartModalProps, ChartModalState> {
  constructor(props: IChartModalProps) {
    super(props);

    this.state = {
      dayField: { value: '1', validationText: '' },
      openField: { value: '5000', validationText: '' },
      highField: { value: '5000', validationText: '' },
      lowField: { value: '5000', validationText: '' },
      closeField: { value: '5000', validationText: '' },
    };
  }

  onChangeClick = () => {
    this.props.modifyChartData({
      x: Number(this.state.dayField.value),
      y: [
        this.state.openField.value,
        this.state.highField.value,
        this.state.lowField.value,
        this.state.closeField.value,
      ],
    });
    const nextDayValue = Number(this.state.dayField.value) + 1;

    this.setState((prevState) => ({
      ...prevState,
      dayField: { value: nextDayValue.toString(), validationText: '' },
    }));
  };

  onDeleteClick = () => {
    this.props.deleteDataByDay(Number(this.state.dayField.value));
    this.props.closeModalClick();
  };

  onInputValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    stateName: string,
    index: number,
  ) => {
    const inputValue = e.target.value;
    this.setState((prevState) => ({
      ...prevState,
      [stateName]: {
        value: inputValue,
        validationText: validateNumericInput(
          inputValue,
          chartModalFields[index].minValue,
          chartModalFields[index].maxValue,
        ),
      },
    }));
  };

  render() {
    const isValidationFailed = Object.values(this.state).some(
      (field) => field.validationText !== '',
    );
    const isDayValidationFailed = this.state.dayField.validationText !== '';

    return (
      <>
        <Title>Change chart value</Title>
        {chartModalFields.map(
          ({ id, title, minValue, maxValue, stateName }, index) => (
            <InputField
              key={id}
              inputType="number"
              title={title}
              minValue={minValue}
              maxValue={maxValue}
              inputValue={this.state[stateName].value}
              errorText={this.state[stateName].validationText}
              onInputChange={(e) =>
                this.onInputValueChange(e, stateName, index)
              }
            />
          ),
        )}
        <Buttons>
          <SubmitButton
            onClick={this.onChangeClick}
            disabled={isValidationFailed}
            data-testid="chart-change-value">
            Change
          </SubmitButton>
          <SubmitButton
            onClick={this.onDeleteClick}
            disabled={isDayValidationFailed}>
            Delete
          </SubmitButton>
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

export const ChartModal = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChartModalComponent);
