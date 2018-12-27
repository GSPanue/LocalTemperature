import React from 'react';
import { shallow } from 'enzyme';

import { mountWithTheme } from '../../../utils/test';

import Error from '..';
import { Wrapper } from '../styles';

describe('Component: Error', () => {
  const minProps = {
    error: 'error',
    children: <div />
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Error {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component when error is not empty', () => {
    const wrapper = shallow(<Error {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render error as text when error is not empty', () => {
    const wrapper = shallow(<Error {...minProps} />);

    expect(wrapper.text()).toEqual(minProps.error);
  });

  it('should not render children when error is not empty', () => {
    const wrapper = shallow(<Error {...minProps} />);

    expect(wrapper.find('div')).toHaveLength(0);
  });

  it('should render children when error is empty', () => {
    const wrapper = shallow(<Error {...minProps} error="" />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should not render a Wrapper component when error is empty', () => {
    const wrapper = shallow(<Error {...minProps} error="" />);

    expect(wrapper.find(Wrapper)).toHaveLength(0);
  });

  it('should not render error as text when error is empty', () => {
    const wrapper = shallow(<Error {...minProps} error="" />);

    expect(wrapper.text()).toEqual('');
  });

  it('should have props for error and children', () => {
    const theme = {
      text: {
        large: '18px',
        bold: 'bold'
      }
    };

    const wrapper = mountWithTheme(<Error {...minProps} />, theme);

    expect(wrapper.find('Error').props().error).toBeDefined();
    expect(wrapper.find('Error').props().children).toBeDefined();
  });
});
