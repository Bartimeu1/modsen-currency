import React from 'react';
import { render } from '@testing-library/react';
import { FooterNavigation } from '.';
import { WithEnvironment } from '@root/services/WithEnvironment';

describe('Footer Navigation component', () => {
  test('renders correctly', () => {
    const { getByTestId } = render(<FooterNavigation />, {
      wrapper: WithEnvironment,
    });

    expect(getByTestId('footer-navigation')).toBeInTheDocument();
  });
});
