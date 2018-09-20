import React from 'react';
import styled from 'styled-components';

export default () => (
  <About>
    <p>This is a fictional project, made for the CargoBR frontend challenge.</p>
    <p>
      Source code available on{' '}
      <a
        className="link"
        href="https://github.com/marcelabomfim/desafiofrontendcargobr"
      >
        github repository
      </a>
    </p>
  </About>
);

const About = styled.div`
  text-align: center;

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`;
