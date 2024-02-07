import React from 'react';
import { render } from '@testing-library/react';
import { Footer } from '.';
import { WithEnvironment } from '@root/services/WithEnvironment';

describe('Footer component', () => {
  test('renders Footer component', () => {
    const { getByTestId } = render(<Footer />, {
      wrapper: WithEnvironment,
    });

    expect(getByTestId('footer')).toBeInTheDocument();
  });
});
