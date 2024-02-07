import React from 'react';
import { render } from '@testing-library/react';
import { Header } from '.';
import { WithEnvironment } from '@root/services/WithEnvironment';

describe('Header component', () => {
  test('renders Header component', () => {
    const { getByTestId } = render(<Header />, {
      wrapper: WithEnvironment,
    });

    expect(getByTestId('header')).toBeInTheDocument();
  });
});
