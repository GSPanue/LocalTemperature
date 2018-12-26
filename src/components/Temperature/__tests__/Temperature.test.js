import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../utils/test';

import Temperature from '../Temperature';

describe('Component: Temperature', () => {
  const minProps = {
    currentTemperature: 'temp',
    currentScale: 'scale',
    changeScale: () => {}
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Temperature {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Button component', () => {
    const wrapper = shallow(<Temperature {...minProps} />);

    expect(wrapper.find('Button')).toHaveLength(1);
  });

  it('should render a Heading component', () => {
    const wrapper = shallow(<Temperature {...minProps} />);

    expect(wrapper.find('Heading')).toHaveLength(1);
  });

  it('should render currentTemperature as text', () => {
    const theme = {
      heading: {
        primaryColor: 'red'
      },
      text: {
        extraLarge: '80px'
      }
    };

    const wrapper = mountWithTheme(<Temperature {...minProps} />, theme);

    expect(wrapper.text()).toEqual('temp');
  });

  it('should have props for currentTemperature, currentScale, and changeScale', () => {
    const wrapper = shallow(<Temperature {...minProps} />);
    const instance = wrapper.instance();

    expect(instance.props.currentTemperature).toBeDefined();
    expect(instance.props.currentScale).toBeDefined();
    expect(instance.props.changeScale).toBeDefined();
  });

  it('should call handleClick on a click event', () => {
    const spy = jest.spyOn(Temperature.prototype, 'handleClick');
    const wrapper = shallow(<Temperature {...minProps} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find('Button').props().onClick();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('Method: handleClick', () => {
    it('should call changeScale', () => {
      const changeScale = jest.fn();
      const wrapper = shallow(<Temperature {...minProps} changeScale={changeScale} />);
      const instance = wrapper.instance();

      expect(changeScale).toHaveBeenCalledTimes(0);
      instance.handleClick();
      expect(changeScale).toHaveBeenCalledTimes(1);
    });

    it('should call changeScale with fahrenheit when currentScale is equal to celsius', () => {
      const changeScale = jest.fn();
      const currentScale = 'celsius';
      const wrapper = shallow(<Temperature {...minProps} changeScale={changeScale} currentScale={currentScale} />);
      const instance = wrapper.instance();

      instance.handleClick();
      expect(changeScale).toBeCalledWith('fahrenheit');
    });

    it('should call changeScale with celsius when currentScale is equal to fahrenheit', () => {
      const changeScale = jest.fn();
      const currentScale = 'fahrenheit';
      const wrapper = shallow(<Temperature {...minProps} changeScale={changeScale} currentScale={currentScale} />);
      const instance = wrapper.instance();

      instance.handleClick();
      expect(changeScale).toBeCalledWith('celsius');
    });
  });
});
