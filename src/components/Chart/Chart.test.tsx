import React from 'react';

import { WithEnvironment } from '@root/services/WithEnvironment';
import { render } from '@testing-library/react';

import { Chart } from '.';
describe('Chart component', () => {
  test('renders Chart component', () => {
    const { getByTestId } = render(<Chart />, {
      wrapper: WithEnvironment,
    });

    expect(getByTestId('chart-wrapper')).toBeInTheDocument();
  });
});
