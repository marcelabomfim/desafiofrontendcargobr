import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import logo from 'assets/img/logo.svg';

export default () => (
  <Logo to="/">
    <img src={logo} alt="React" />
    <h1>Buy React.js Developers</h1>
  </Logo>
);

const Logo = styled(NavLink)`
  display: flex;
  justify-content: start;

  img {
    width: 50px;
    height: 50px;
    margin-right: ${({ theme }) => theme.spacing.small};
  }

  h1 {
    width: 130px;
    margin: 0;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    img {
      width: 80px;
      height: 80px;
      margin-right: ${({ theme }) => theme.spacing.large};
    }

    h1 {
      width: 230px;
      font-size: 32px;
    }
  }
`;
