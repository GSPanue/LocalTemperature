import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../utils/test';

import Card from '..';
import { Wrapper } from '../styles';

describe('Component: Card', () => {
  const minProps = {
    children: [<div key={0} />],
    className: 'class'
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Card {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Card {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Card {...minProps} />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have props for children and className', () => {
    const theme = {
      card: {
        primaryBackground: 'red'
      }
    };

    const wrapper = mountWithTheme(<Card {...minProps} />, theme);

    expect(wrapper.find('Card').props().children).toBeDefined();
    expect(wrapper.find('Card').props().className).toBeDefined();
  });
});
