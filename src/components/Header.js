import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';
import Logo from 'components/Logo';
import Menu from 'components/Menu';

export default () => (
  <Header>
    <Container>
      <Logo />
      <Menu />
    </Container>
  </Header>
);

const Header = styled.header`
  width: 100%;
  display: block;
  padding: ${({ theme }) => theme.spacing.large} 0;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    padding: ${({ theme }) => theme.spacing.xlarge} 0;
  }
`;
