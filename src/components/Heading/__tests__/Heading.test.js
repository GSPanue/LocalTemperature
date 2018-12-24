import React from 'react';
import { shallow, mount } from 'enzyme';

import Heading from '..';
import { Wrapper } from '../styles';

describe('Component: Heading', () => {
  const minProps = {
    children: 'text'
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Heading {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Heading {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render children as text', () => {
    const wrapper = shallow(<Heading {...minProps} />);

    expect(wrapper.text()).toEqual('text');
  });

  it('should have props for children', () => {
    const wrapper = mount(<Heading {...minProps} />);

    expect(wrapper.props().children).toBeDefined();
  });
});
