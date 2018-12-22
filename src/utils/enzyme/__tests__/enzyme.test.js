import React from 'react';
import { mountWithTheme } from '..';

describe('Utility: Enzyme', () => {
  describe('Function: mountWithTheme', () => {
    const Component = () => (<div />);
    const theme = {
      color: 'red'
    };

    it('should render without crashing', () => {
      const wrapper = mountWithTheme(<Component />, theme);

      expect(wrapper).toHaveLength(1);
    });

    it('should render a ThemeProvider component', () => {
      const wrapper = mountWithTheme(<Component />, theme);

      expect(wrapper.find('ThemeProvider')).toHaveLength(1);
    });

    it('should render children', () => {
      const wrapper = mountWithTheme(<Component />, theme);

      expect(wrapper.find('div')).toHaveLength(1);
    });

    it('should pass theme as props to ThemeProvider', () => {
      const wrapper = mountWithTheme(<Component />, theme);

      expect(wrapper.find('ThemeProvider').props().theme).toBeDefined();
    });

    it('should return an object', () => {
      expect(mountWithTheme(<Component />, theme)).toBeObject();
    });
  });
});
