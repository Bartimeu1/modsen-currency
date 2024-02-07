import React from 'react';

import { WithEnvironment } from '@root/services/WithEnvironment';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ConverterList } from './index';

const mockCurrencies = {
  USD: { code: 'USD', value: 0 },
  EUR: { code: 'EUR', value: 0 },
};

describe('Converter List component', () => {
  test('renders ConverterList component', () => {
    const { getByTestId } = render(
      <ConverterList currencies={mockCurrencies} />,
      {
        wrapper: WithEnvironment,
      },
    );

    const converterList = getByTestId('converter-list');
    expect(converterList).toBeInTheDocument;
  });

  test('opens modal on currency selection', async () => {
    const { getAllByTestId, queryByTestId } = render(
      <ConverterList currencies={mockCurrencies} />,
      {
        wrapper: WithEnvironment,
      },
    );
    const converterItem = getAllByTestId('converter-item')[0];

    expect(converterItem).toBeInTheDocument();
    userEvent.click(converterItem);
    await waitFor(() => {
      const modal = queryByTestId('modal');
      expect(modal).toBeInTheDocument();
    });
  });
});
