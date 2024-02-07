import React from 'react';
import { render } from '@testing-library/react';
import { UpdateInfo } from '.';
import { WithEnvironment } from '@root/services/WithEnvironment';

describe('Update Info component', () => {
  const mockProps = {
    time: Date.now(),
  };

  test('renders correctly', () => {
    const { getByTestId } = render(<UpdateInfo {...mockProps} />, {
      wrapper: WithEnvironment,
    });

    expect(getByTestId('update-info')).toBeInTheDocument();
  });
});
