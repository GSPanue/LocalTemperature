import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../utils/test';

import Loader from '..';

describe('Component: Loader', () => {
  const minProps = {
    complete: false,
    error: '',
    children: <div />
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Loader {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Error component', () => {
    const wrapper = shallow(<Loader {...minProps} />);

    expect(wrapper.find('Error')).toHaveLength(1);
  });

  it('should render a Spinner component when complete is false', () => {
    const wrapper = shallow(<Loader {...minProps} />);

    expect(wrapper.find('Spinner')).toHaveLength(1);
  });

  it('should not render children when complete is false', () => {
    const wrapper = shallow(<Loader {...minProps} />);

    expect(wrapper.find('div')).toHaveLength(0);
  });

  it('should render children when complete is true', () => {
    const wrapper = shallow(<Loader {...minProps} complete />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should not render a Spinner component when complete is true', () => {
    const wrapper = shallow(<Loader {...minProps} complete />);

    expect(wrapper.find('Spinner')).toHaveLength(0);
  });

  it('should have props for complete, error, and children', () => {
    const theme = {
      spinner: {
        primaryColor: 'red'
      }
    };

    const wrapper = mountWithTheme(<Loader {...minProps} />, theme);

    expect(wrapper.find('Loader').props().complete).toBeDefined();
    expect(wrapper.find('Loader').props().error).toBeDefined();
    expect(wrapper.find('Loader').props().children).toBeDefined();
  });

  it('should pass error as props to the Error component', () => {
    const theme = {
      spinner: {
        primaryColor: 'red'
      }
    };

    const wrapper = mountWithTheme(<Loader {...minProps} />, theme);

    expect(wrapper.find('Error').props().error).toBeDefined();
  });
});
