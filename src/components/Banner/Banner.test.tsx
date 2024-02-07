import React from 'react';
import { render } from '@testing-library/react';
import { Banner } from '.';
import { WithEnvironment } from '@root/services/WithEnvironment';

describe('Banner component', () => {
  test('renders Banner component', () => {
    const { getByTestId } = render(<Banner />, {
      wrapper: WithEnvironment,
    });

    expect(getByTestId('banner')).toBeInTheDocument();
  });
});
