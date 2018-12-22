import React from 'react';
import { shallow } from 'enzyme';

import Temperature from '..';

describe('Component: Temperature', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Temperature />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a div', () => {
    const wrapper = shallow(<Temperature />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should render "Temperature" as text', () => {
    const wrapper = shallow(<Temperature />);

    expect(wrapper.text()).toEqual('Temperature');
  });
});
