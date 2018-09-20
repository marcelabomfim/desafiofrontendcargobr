import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';

export default () => (
  <Menu>
    <ul>
      <li>
        <NavLink activeClassName="active" to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </li>
    </ul>
  </Menu>
);

const Menu = styled.nav`
  text-align: right;
  margin: 0;

  ul {
    margin: 0;

    li {
      display: block;
      list-style: none;
      padding: 0 20px;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 14px;
      margin: ${({ theme }) => theme.spacing.xsmall} 0;

      &:hover {
        color: ${({ theme }) => lighten(0.2, theme.colors.primary)};
      }

      .active {
        font-weight: bold;
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    ul li {
      display: inline-block;
      font-size: 16px;
    }
  }
`;
