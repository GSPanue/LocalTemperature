import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';

describe('Component: App', () => {
  const minProps = {
    currentScreen: 'splash'
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<App {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a ThemeProvider component', () => {
    const wrapper = shallow(<App {...minProps} />);

    expect(wrapper.find('ThemeProvider')).toHaveLength(1);
  });

  it('should render a Splash component', () => {
    const wrapper = shallow(<App {...minProps} />);

    expect(wrapper.find('Splash')).toHaveLength(1);
  });

  it('should have props for currentScreen', () => {
    const wrapper = mount(<App {...minProps} />);

    expect(wrapper.props().currentScreen).toBeDefined();
  });
});
