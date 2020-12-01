import React from 'react';
import { shallow } from 'enzyme';

import Module from './Module';

describe('Module', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<Module />);
    expect(wrapper).toMatchSnapshot();
  });
});
