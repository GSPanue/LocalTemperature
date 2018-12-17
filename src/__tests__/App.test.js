import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';

describe('Component: App', () => {
  const minProps = {
    currentScreen: 'splash',
    changeScreen: () => {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<App {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a ThemeProvider component', () => {
    const wrapper = shallow(<App {...minProps} />);

    expect(wrapper.find('ThemeProvider')).toHaveLength(1);
  });

  it('should render a Splash component when currentScreen is equal to splash', () => {
    const wrapper = shallow(<App {...minProps} />);

    expect(wrapper.find('Splash')).toHaveLength(1);
  });

  it('should render a div when currentScreen is not equal to splash', () => {
    const wrapper = shallow(<App {...minProps} currentScreen="Home" />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have props for currentScreen and changeScreen', () => {
    const wrapper = mount(<App {...minProps} />);

    expect(wrapper.props().currentScreen).toBeDefined();
    expect(wrapper.props().changeScreen).toBeDefined();
  });
});
