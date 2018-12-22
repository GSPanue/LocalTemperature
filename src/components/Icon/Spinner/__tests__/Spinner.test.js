import React from 'react';
import { shallow, mount } from 'enzyme';

import Spinner from '..';
import { StyledIconBase, StyledCircle } from '../styles';

describe('Component: Spinner', () => {
  const minProps = {
    color: 'red',
    thickness: '5'
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Spinner {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a StyledIconBase component', () => {
    const wrapper = shallow(<Spinner {...minProps} />);

    expect(wrapper.find(StyledIconBase)).toHaveLength(1);
  });

  it('should render a StyledCircle component', () => {
    const wrapper = shallow(<Spinner {...minProps} />);

    expect(wrapper.find(StyledCircle)).toHaveLength(1);
  });

  it('should have props for color, thickness, and size', () => {
    const wrapper = mount(<Spinner {...minProps} />);

    expect(wrapper.props().color).toBeDefined();
    expect(wrapper.props().thickness).toBeDefined();
    expect(wrapper.props().size).toBeDefined();
  });

  it('should pass size to StyledIconBase', () => {
    const size = '25';
    const wrapper = mount(<Spinner {...minProps} size={size} />);

    expect(wrapper.find(StyledIconBase).props().width).toEqual(size);
    expect(wrapper.find(StyledIconBase).props().height).toEqual(size);
  });

  it('should pass color and thickness to StyledCircle', () => {
    const color = 'green';
    const thickness = '5';
    const wrapper = mount(<Spinner color={color} thickness={thickness} />);

    expect(wrapper.find(StyledCircle).props().strokeColor).toEqual(color);
    expect(wrapper.find(StyledCircle).props().thickness).toEqual(thickness);
  });

  it('should pass additional props to StyledIconBase', () => {
    const viewBox = '0 0 25 25';
    const wrapper = mount(<Spinner {...minProps} viewBox={viewBox} />);

    expect(wrapper.find(StyledIconBase).props().viewBox).toEqual(viewBox);
  });
});
