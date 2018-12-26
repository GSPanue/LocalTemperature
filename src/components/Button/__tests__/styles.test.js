import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Wrapper } from '../styles';

describe('Styles: Button', () => {
  describe('Component: Wrapper', () => {
    it('should have the correct styles', () => {
      const wrapper = mount(<Wrapper />);

      expect(wrapper).toHaveStyleRule('user-select', 'none');
      expect(wrapper).toHaveStyleRule('cursor', 'pointer');
    });
  });
});
