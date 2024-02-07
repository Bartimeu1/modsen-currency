import React from 'react';

import { WithEnvironment } from '@root/services/WithEnvironment';
import { render } from '@testing-library/react';

import { FooterNavigation } from '.';

describe('Footer Navigation component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<FooterNavigation />, {
      wrapper: WithEnvironment,
    });

    expect(getByTestId('footer-navigation')).toBeInTheDocument();
  });
});
