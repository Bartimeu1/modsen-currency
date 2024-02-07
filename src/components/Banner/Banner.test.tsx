import React from 'react';

import { WithEnvironment } from '@root/services/WithEnvironment';
import { render } from '@testing-library/react';

import { Banner } from '.';

describe('Banner component', () => {
  test('renders Banner component', () => {
    const { getByTestId } = render(<Banner />, {
      wrapper: WithEnvironment,
    });

    expect(getByTestId('banner')).toBeInTheDocument();
  });
});
