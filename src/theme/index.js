import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const theme = {
  colors: {
    primary: '#3765af',
    secondary: '#FF636E',
    text: '#1D232E',
    lightText: '#F2F2F6',
    background: '#F6F9F8',
    selectedColor: '#00C38A'
  },
  spacing: {
    xsmall: '4px',
    small: '8px',
    base: '16px',
    large: '24px',
    xlarge: '48px'
  },
  breakpoints: {
    small: '576px',
    medium: '768px',
    large: '992px'
  }
};

injectGlobal`
  ${styledNormalize}

  *, *:before, *:after {
    box-sizing: border-box;
    outline: none;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
  }

  a, a:visited, a:focus {
    color: inherit;
    text-decoration: none;
  }
`;
