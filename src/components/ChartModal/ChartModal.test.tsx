import React from 'react';
import { render } from '@testing-library/react';
import { ChartModal } from '.';
import { WithEnvironment } from '@root/services/WithEnvironment';

const mockProps = {
  closeModalClick() {},
};
describe('Chart Modal component', () => {
  test('renders ChartModal component', () => {
    const { getByText } = render(<ChartModal {...mockProps} />, {
      wrapper: WithEnvironment,
    });

    expect(getByText('Change chart value')).toBeInTheDocument();
  });
});
