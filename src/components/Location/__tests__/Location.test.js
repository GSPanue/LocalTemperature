import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../utils/test';

import Location from '../Location';

describe('Component: Location', () => {
  const minProps = {
    currentLocation: 'location'
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Location {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Subheading component', () => {
    const wrapper = shallow(<Location {...minProps} />);

    expect(wrapper.find('Subheading')).toHaveLength(1);
  });

  it('should render currentLocation as text', () => {
    const theme = {
      subheading: {
        primaryColor: 'red'
      },
      text: {
        large: '30px'
      }
    };

    const wrapper = mountWithTheme(<Location {...minProps} />, theme);

    expect(wrapper.text()).toEqual(minProps.currentLocation);
  });

  it('should have props for currentLocation', () => {
    const theme = {
      subheading: {
        primaryColor: 'red'
      },
      text: {
        large: '30px'
      }
    };

    const wrapper = mountWithTheme(<Location {...minProps} />, theme);

    expect(wrapper.find('Location').props().currentLocation).toBeDefined();
  });
});
