import React from 'react';
import { ThemeProvider } from 'styled-components';
import { mount } from 'enzyme';

/**
 * mountWithTheme: Mounts and returns a themed component.
 */
const mountWithTheme = (children, theme) => (
  mount(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
);

export {
  mountWithTheme
};
