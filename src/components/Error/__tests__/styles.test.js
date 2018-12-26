import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Wrapper } from '../styles';

describe('Styles: Error', () => {
  const theme = {
    text: {
      medium: '12px'
    }
  };

  describe('Component: Wrapper', () => {
    it('should have the correct styles', () => {
      const wrapper = mount(<Wrapper theme={theme} />);

      expect(wrapper).toHaveStyleRule('padding', '0 60px');
      expect(wrapper).toHaveStyleRule('font-size', theme.text.medium);
      expect(wrapper).toHaveStyleRule('font-weight', 'bold');
    });
  });
});
