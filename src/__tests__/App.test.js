import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('Component: App', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Fragment', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Fragment')).toHaveLength(1);
  });

  it('should render a ThemeProvider component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('ThemeProvider')).toHaveLength(1);
  });

  it('should render a div', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('div')).toHaveLength(1);
  });
});
