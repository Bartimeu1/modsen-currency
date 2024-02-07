import React from 'react';
import { render } from '@testing-library/react';
import { Chart } from '.';
import { WithEnvironment } from '@root/services/WithEnvironment';
describe('Chart component', () => {
  test('renders Chart component', () => {
    const { getByTestId } = render(<Chart />, {
      wrapper: WithEnvironment,
    });

    expect(getByTestId('chart-wrapper')).toBeInTheDocument();
  });
});
