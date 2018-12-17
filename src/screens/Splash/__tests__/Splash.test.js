import React from 'react';
import { shallow } from 'enzyme';

import Splash from '..';
import { Wrapper } from '../styles';

describe('Component: Splash', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Splash />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Splash />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a Spinner component', () => {
    const wrapper = shallow(<Splash />);

    expect(wrapper.find('Spinner')).toHaveLength(1);
  });
});
