import React from 'react';
import { render } from '@testing-library/react';
import { Toast } from '.';
import { WithEnvironment } from '@root/services/WithEnvironment';

describe('Toast component', () => {
  const mockProps = {
    message: 'test',
    isVisible: true,
    closeToast: jest.fn,
  };

  test('renders correctly', () => {
    const { getByTestId } = render(<Toast {...mockProps} />, {
      wrapper: WithEnvironment,
    });

    expect(getByTestId('toast')).toBeInTheDocument();
  });
});
