import React from 'react';
import { shallow, mount } from 'enzyme';

import IconBase from '..';

describe('Component: IconBase', () => {
  const minProps = {
    children: <div />
  };

  it('should render without crashing', () => {
    const wrapper = shallow(<IconBase {...minProps} />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a svg tag', () => {
    const wrapper = shallow(<IconBase {...minProps} />);

    expect(wrapper.find('svg')).toHaveLength(1);
  });

  it('should render children', () => {
    const wrapper = shallow(<IconBase {...minProps} />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should have props for children', () => {
    const wrapper = mount(<IconBase {...minProps} />);

    expect(wrapper.props().children).toBeDefined();
  });

  it('should pass additional props to svg', () => {
    const wrapper = mount(<IconBase {...minProps} height="20" width="20" />);

    expect(wrapper.find('svg').props().height).toBeDefined();
    expect(wrapper.find('svg').props().width).toBeDefined();
  });
});
