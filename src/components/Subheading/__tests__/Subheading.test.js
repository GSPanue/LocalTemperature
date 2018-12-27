import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../utils/test';

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

    expect(wrapper.text()).toEqual(minProps.children);
  });

  it('should have props for children', () => {
    const theme = {
      subheading: {
        primaryColor: 'red'
      },
      text: {
        large: '30px'
      }
    };

    const wrapper = mountWithTheme(<Subheading {...minProps} />, theme);

    expect(wrapper.find('Subheading').props().children).toBeDefined();
  });
});
