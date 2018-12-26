import React from 'react';
import { mount } from 'enzyme';
import { keyframes, css } from 'styled-components';
import 'jest-styled-components';

import { StyledIconBase, StyledCircle } from '../styles';

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }

  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

describe('Styles: Spinner', () => {
  const theme = {
    spinner: {
      primaryColor: 'red',
      thickness: '4'
    }
  };

  describe('Component: StyledIconBase', () => {
    const minProps = {
      children: <rect />
    };

    it('should have the correct styles', () => {
      const wrapper = mount(<StyledIconBase {...minProps} />);
      const rotateClassName = css`${rotate}`[0].name;

      expect(wrapper).toHaveStyleRule('animation', `${rotateClassName} 2s linear infinite`);
    });
  });

  describe('Component: StyledCircle', () => {
    it('should have the correct styles', () => {
      const wrapper = mount(<StyledCircle theme={theme} />);
      const dashClassName = css`${dash}`[0].name;

      expect(wrapper).toHaveStyleRule('stroke', theme.spinner.primaryColor);
      expect(wrapper).toHaveStyleRule('stroke-linecap', 'round');
      expect(wrapper).toHaveStyleRule('stroke-width', theme.spinner.thickness);
      expect(wrapper).toHaveStyleRule('animation', `${dashClassName} 1.5s ease-in-out infinite`);
    });

    it('should not use theme style for stroke when strokeColor is defined', () => {
      const strokeColor = 'green';
      const wrapper = mount(<StyledCircle theme={theme} strokeColor={strokeColor} />);

      expect(wrapper).not.toHaveStyleRule('stroke', theme.spinner.primaryColor);
      expect(wrapper).toHaveStyleRule('stroke', strokeColor);
    });

    it('should not use theme style for stroke-width when thickness is defined', () => {
      const thickness = '2';
      const wrapper = mount(<StyledCircle theme={theme} thickness={thickness} />);

      expect(wrapper).not.toHaveStyleRule('stroke-width', theme.spinner.thickness);
      expect(wrapper).toHaveStyleRule('stroke-width', thickness);
    });
  });
});
