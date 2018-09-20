import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

export const theme = {
  primary: '#4E13F0',
  secondary: '#4B545B',
  text: '#F2F2F6',
  background: '#FFFFFF',
  darkBackground: '#1D232E'
};

injectGlobal`
  ${styledNormalize}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }

  a, a:visited, a:focus {
    color: inherit;
  }
`;
