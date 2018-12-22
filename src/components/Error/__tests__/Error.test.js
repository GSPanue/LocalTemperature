import React from 'react';
import { shallow } from 'enzyme';

import Error from '..';
import { Wrapper } from '../styles';

describe('Component: Error', () => {
  const minProps = {
    children: <div />
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<Error {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a Wrapper component', () => {
    const wrapper = shallow(<Error {...minProps} />);

    expect(wrapper.find(Wrapper)).toHaveLength(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<Error {...minProps} />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have props for children', () => {
    const wrapper = shallow(<Error {...minProps} />);

    expect(wrapper.props().children).toBeDefined();
  });
});
