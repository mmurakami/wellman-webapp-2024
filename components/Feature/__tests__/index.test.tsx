import { render } from '@testing-library/react';

import Feature from '../index';

describe('Feature component', () => {
  test('renders without error', () => {
    render(<Feature blok={{ name: 'Wellman' }} />);
  });

  test('renders without error', () => {
    const { getByText } = render(<Feature blok={{ name: 'Wellman' }} />);
    expect(getByText(/Wellman/i)).toBeInTheDocument();
  });
});
