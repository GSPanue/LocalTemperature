import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../App';
import { Wrapper } from '../styles';

describe('Component: App', () => {
  const minProps = {
    complete: false,
    error: '',
    getWeather: () => {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<App {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a ThemeProvider component', () => {
    const wrapper = shallow(<App {...minProps} />);

    expect(wrapper.find('ThemeProvider')).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<App {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render a Loader component', () => {
    const wrapper = shallow(<App {...minProps} />);

    expect(wrapper.find('Loader')).toHaveLength(1);
  });

  it('should render a Main component', () => {
    const wrapper = shallow(<App {...minProps} />);

    expect(wrapper.find('Main')).toHaveLength(1);
  });

  it('should have props for complete, error, and getWeather', () => {
    const wrapper = mount(<App {...minProps} />);

    expect(wrapper.props().complete).toBeDefined();
    expect(wrapper.props().error).toBeDefined();
    expect(wrapper.props().getWeather).toBeDefined();
  });

  it('should pass complete and error as props to the Loader component', () => {
    const wrapper = mount(<App {...minProps} />);

    expect(wrapper.find('Loader').props().complete).toBeDefined();
    expect(wrapper.find('Loader').props().error).toBeDefined();
  });

  it('should call componentDidMount on mount', () => {
    const spy = jest.spyOn(App.prototype, 'componentDidMount');
    shallow(<App {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: componentDidMount', () => {
    it('should call getWeather', () => {
      const getWeather = jest.fn();
      const wrapper = shallow(<App {...minProps} getWeather={getWeather} />);
      const instance = wrapper.instance();

      getWeather.mockClear();
      instance.componentDidMount();

      expect(getWeather).toHaveBeenCalledTimes(1);
    });
  });
});
