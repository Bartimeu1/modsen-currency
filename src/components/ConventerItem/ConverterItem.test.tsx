import React from 'react';
import { render } from '@testing-library/react';
import { ConverterItem } from './';
import { WithEnvironment } from '@root/services/WithEnvironment';
import userEvent from '@testing-library/user-event';

const mockProps = {
  currencyCode: 'USD',
  title: 'US Dollar',
  image: 'usd.png',
  rate: 1.0,
  onClick: jest.fn(),
};

describe('Converter Item component', () => {
  test('renders ConverterItem component', () => {
    const { getByTestId } = render(<ConverterItem {...mockProps} />, {
      wrapper: WithEnvironment,
    });

    const converterItem = getByTestId('converter-item');
    expect(converterItem).toBeInTheDocument;
  });

  test('calls onClick handler when clicked', () => {
    const { getByTestId } = render(<ConverterItem {...mockProps} />, {
      wrapper: WithEnvironment,
    });

    const converterItem = getByTestId('converter-item');
    userEvent.click(converterItem);
    expect(mockProps.onClick).toHaveBeenCalledWith('USD');
  });
});
