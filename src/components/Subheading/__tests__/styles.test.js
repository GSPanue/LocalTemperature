import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { Wrapper } from '../styles';

describe('Styles: Subheading', () => {
  const theme = {
    subheading: {
      primaryColor: 'red'
    },
    text: {
      large: '30px'
    }
  };

  describe('Component: Wrapper', () => {
    it('should have the correct styles', () => {
      const wrapper = mount(<Wrapper theme={theme} />);

      expect(wrapper).toHaveStyleRule('color', theme.subheading.primaryColor);
      expect(wrapper).toHaveStyleRule('font-size', theme.text.large);
    });
  });
});
