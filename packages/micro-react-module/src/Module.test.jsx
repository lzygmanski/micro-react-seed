import React from 'react';
import { render } from '@testing-library/react';

import Module from './Module';

describe('Module', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Module />);
    expect(asFragment()).toMatchSnapshot();
  });
});
