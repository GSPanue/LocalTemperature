import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import { StyledCard } from '../styles';

describe('Styles: Main', () => {
  const theme = {
    card: {
      primaryBackground: 'red'
    }
  };

  describe('Component: StyledCard', () => {
    const minProps = {
      children: [<div key={0} />]
    };

    it('should have the correct styles', () => {
      const wrapper = mount(<StyledCard {...minProps} theme={theme} />);

      expect(wrapper).toHaveStyleRule('display', 'flex');
      expect(wrapper).toHaveStyleRule('flex-direction', 'column');
      expect(wrapper).toHaveStyleRule('align-items', 'center');
    });
  });
});
