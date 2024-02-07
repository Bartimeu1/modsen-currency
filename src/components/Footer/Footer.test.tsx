import React from 'react';

import { WithEnvironment } from '@root/services/WithEnvironment';
import { render } from '@testing-library/react';

import { Footer } from '.';

describe('Footer component', () => {
  test('renders Footer component', () => {
    const { getByTestId } = render(<Footer />, {
      wrapper: WithEnvironment,
    });

    expect(getByTestId('footer')).toBeInTheDocument();
  });
});
