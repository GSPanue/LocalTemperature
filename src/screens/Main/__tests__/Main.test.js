import React from 'react';
import { shallow } from 'enzyme';

import Main from '..';

describe('Component: Main', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a div', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('should render a Card component', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper.find('Card')).toHaveLength(1);
  });
});
