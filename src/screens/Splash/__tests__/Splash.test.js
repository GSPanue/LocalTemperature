import React from 'react';
import { shallow } from 'enzyme';

import Splash from '..';

describe('Component: Splash', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Splash />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a div', () => {
    const wrapper = shallow(<Splash />);

    expect(wrapper.find('div')).toHaveLength(1);
  });
});
