import React from 'react';
import { shallow } from 'enzyme';

import Main from '..';
import { StyledCard } from '../styles';

describe('Component: Main', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper).toHaveLength(1);
  });

  it('should render a StyledCard component', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper.find(StyledCard)).toHaveLength(1);
  });

  it('should render a Temperature component', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper.find('Connect(Temperature)')).toHaveLength(1);
  });

  it('should render a Location component', () => {
    const wrapper = shallow(<Main />);

    expect(wrapper.find('Connect(Location)')).toHaveLength(1);
  });
});
