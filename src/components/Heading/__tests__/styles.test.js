import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Wrapper } from '../styles';

describe('Styles: Heading', () => {
  const theme = {
    heading: {
      primaryColor: 'red'
    },
    text: {
      extraLarge: '80px'
    }
  };

  describe('Component: Wrapper', () => {
    it('should have the correct styles', () => {
      const wrapper = mount(<Wrapper theme={theme} />);

      expect(wrapper).toHaveStyleRule('color', theme.heading.primaryColor);
      expect(wrapper).toHaveStyleRule('font-size', theme.text.extraLarge);
      expect(wrapper).toHaveStyleRule('font-weight', 'bold');
    });
  });
});
