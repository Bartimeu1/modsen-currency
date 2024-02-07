import React from 'react';

import { WithEnvironment } from '@root/services/WithEnvironment';
import { render } from '@testing-library/react';

import { Header } from '.';

describe('Header component', () => {
  test('renders Header component', () => {
    const { getByTestId } = render(<Header />, {
      wrapper: WithEnvironment,
    });

    expect(getByTestId('header')).toBeInTheDocument();
  });
});
