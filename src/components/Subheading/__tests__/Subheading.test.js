import React from 'react';
import { shallow, mount } from 'enzyme';

import Subheading from '..';
import { Wrapper } from '../styles';

describe('Component: Subheading', () => {
  const minProps = {
    children: 'text'
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Subheading {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Subheading {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render children as text', () => {
    const wrapper = shallow(<Subheading {...minProps} />);

    expect(wrapper.text()).toEqual('text');
  });

  it('should have props for children', () => {
    const wrapper = mount(<Subheading {...minProps} />);

    expect(wrapper.props().children).toBeDefined();
  });
});
