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
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }

  h1 {
    width: 230px;
    margin: 0;
    font-size: 2em;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
