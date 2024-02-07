import React from 'react';

import { WithEnvironment } from '@root/services/WithEnvironment';
import { fireEvent,render } from '@testing-library/react';

import { CustomSelect } from '.';

describe('CustomSelect component', () => {
  const mockCurrenciesList = {
    USD: { title: 'US Dollar', image: 'usd.png' },
    EUR: { title: 'Euro', image: 'eur.png' },
  };
  const mockSetTargetCurrencyCode = jest.fn();

  test('renders CustomSelect component', () => {
    const { getByTestId } = render(
      <CustomSelect
        targetCurrencyCode="USD"
        currenciesList={mockCurrenciesList}
        setTargetCurrencyCode={mockSetTargetCurrencyCode}
      />,
      {
        wrapper: WithEnvironment,
      },
    );

    expect(getByTestId('select')).toBeInTheDocument();
  });

  it('opens dropdown when select is clicked', () => {
    const { getByTestId } = render(
      <CustomSelect
        targetCurrencyCode="USD"
        currenciesList={mockCurrenciesList}
        setTargetCurrencyCode={mockSetTargetCurrencyCode}
      />,
      { wrapper: WithEnvironment },
    );
    fireEvent.click(getByTestId('select'));
    expect(getByTestId('select-dropdown')).toBeInTheDocument();
  });

  it('calls setTargetCurrencyCode when new currency is selected', () => {
    const { getByTestId } = render(
      <CustomSelect
        targetCurrencyCode="USD"
        currenciesList={mockCurrenciesList}
        setTargetCurrencyCode={mockSetTargetCurrencyCode}
      />,
      { wrapper: WithEnvironment },
    );
    fireEvent.click(getByTestId('select'));
    fireEvent.click(getByTestId('select-dropdown-item'));
    expect(mockSetTargetCurrencyCode).toHaveBeenCalledWith('EUR');
  });
});
