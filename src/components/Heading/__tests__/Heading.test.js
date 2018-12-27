import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../utils/test';

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

    expect(wrapper.text()).toEqual(minProps.children);
  });

  it('should have props for children', () => {
    const theme = {
      heading: {
        primaryColor: 'red'
      },
      text: {
        extraLarge: '80px'
      }
    };

    const wrapper = mountWithTheme(<Heading {...minProps} />, theme);

    expect(wrapper.props().children).toBeDefined();
  });
});
