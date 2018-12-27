import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Wrapper } from '../styles';

describe('Styles: Card', () => {
  const theme = {
    card: {
      primaryBackground: 'red'
    }
  };

  describe('Component: Wrapper', () => {
    it('should have the correct styles', () => {
      const wrapper = mount(<Wrapper theme={theme} />);

      expect(wrapper).toHaveStyleRule('padding', '80px');
      expect(wrapper).toHaveStyleRule('border-radius', '6px');
      expect(wrapper).toHaveStyleRule('box-shadow', '0 3px 6px 0 rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.08)');
      expect(wrapper).toHaveStyleRule('background', theme.card.primaryBackground);
      expect(wrapper).toHaveStyleRule('user-select', 'none');
    });
  });
});
