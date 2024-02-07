import React from 'react';
import { render, renderHook, waitFor } from '@testing-library/react';
import { ConverterModal } from './';
import { WithEnvironment } from '@root/services/WithEnvironment';
import { useGetCurrencyRatesQuery } from '@store/features/currency/currencyApi';
import fetchMock from 'jest-fetch-mock';

const mockProps = {
  selectedCurrency: 'USD',
};
const mockRequestPararams = { currencies: 'USD', base_currency: 'EUR' };

describe('Converter Modal component', () => {
  const data = {
    data: {
      meta: {
        last_updated_at: '2024-02-06T23:59:59Z',
      },
      data: {
        EUR: {
          code: 'EUR',
          value: 1,
        },
      },
    },
  };

  beforeAll(() => {
    fetchMock.mockOnceIf(
      'https://api.currencyapi.com/v3/latest?currencies=USD&base_currency=EUR',
      () =>
        Promise.resolve({
          status: 200,
          body: JSON.stringify({ data }),
        }),
    );
  });

  test('renders ConverterModal component', () => {
    const { getByText } = render(<ConverterModal {...mockProps} />, {
      wrapper: WithEnvironment,
    });

    expect(getByText('Currency converter')).toBeInTheDocument();
  });

  test('renders request hook', async () => {
    const { result } = renderHook(
      () => useGetCurrencyRatesQuery(mockRequestPararams),
      {
        wrapper: WithEnvironment,
      },
    );

    expect(result.current).toMatchObject({
      status: 'pending',
      endpointName: 'getCurrencyRates',
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current).toMatchObject({
      status: 'fulfilled',
      endpointName: 'getCurrencyRates',
      data: {},
      isLoading: false,
      isSuccess: true,
      isError: false,
      currentData: {},
      isFetching: false,
    });
  });

  test('shows loading while request', () => {
    const { getByTestId } = render(<ConverterModal {...mockProps} />, {
      wrapper: WithEnvironment,
    });

    const resultCurrency = getByTestId('currency-modal-result');
    expect(resultCurrency.textContent).toBe('loading...-');
  });
});
