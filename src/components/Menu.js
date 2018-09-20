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
      display: inline-block;
      list-style: none;
      padding: 5px 20px;
      color: ${({ theme }) => theme.colors.primary};

      &:hover {
        color: ${({ theme }) => lighten(0.2, theme.colors.primary)};
      }

      .active {
        font-weight: bold;
      }
    }
  }
`;
