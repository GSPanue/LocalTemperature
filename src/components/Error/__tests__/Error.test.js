import React from 'react';
import { shallow } from 'enzyme';

import Error from '..';
import { Wrapper } from '../styles';

describe('Component: Error', () => {
  const minProps = {
    error: 'error'
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Error {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Error {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render error as text', () => {
    const wrapper = shallow(<Error {...minProps} />);

    expect(wrapper.text()).toEqual('error');
  });

  it('should have props for message', () => {
    const wrapper = shallow(<Error {...minProps} />);

    expect(wrapper.props().children).toBeDefined();
    expect(wrapper.props().children).toEqual('error');
  });
});
