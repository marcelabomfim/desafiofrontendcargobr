import React from 'react';
import styled from 'styled-components';

import memberPrice from 'utils/memberPrice';

export default ({ member, selected, handleMemberSelect }) => (
  <Member>
    <header>
      <img src={member.avatar_url} alt={member.name} />
      <h1 className="name">{member.name}</h1>
      <h2 className="login">@{member.login}</h2>
      <h3 className="price">$ {memberPrice(member)}</h3>
    </header>
    <footer>
      <p>
        <span>{member.public_repos}</span>
        Repos
      </p>
      <p>
        <span>{member.followers}</span>
        Followers
      </p>
      <p>
        <span>{member.following}</span>
        Following
      </p>
      <button
        className={selected ? 'is-selected' : ''}
        onClick={() => handleMemberSelect(member.id)}
      >
        {selected ? 'Selected' : 'Select'}
      </button>
    </footer>
  </Member>
);

const Member = styled.div`
  display: block;
  background: #fff;
  border-radius: ${({ theme }) => theme.spacing.small};
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: box-shadow ease 0.2s;
  margin-top: 50px;

  &:hover {
    will-change: box-shadow;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.07),
      0 5px 15px 0 rgba(0, 0, 0, 0.05);
  }

  img {
    width: 76px;
    height: 76px;
    display: block;
    border-radius: 50%;
    margin: -35px auto 0 auto;
    border: ${({ theme }) => theme.spacing.small} solid #fff;
    background: ${({ theme }) => theme.colors.lightText};
  }

  header {
    text-align: center;
  }

  .name {
    margin: 0;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 14px;
  }

  .login {
    margin: 0;
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 10px;
  }

  .price {
    color: ${({ theme }) => theme.colors.selectedColor};
    margin: ${({ theme }) => theme.spacing.base} 0;
    font-size: 24px;
  }

  footer {
    padding: ${({ theme }) => theme.spacing.base};
    border-top: 1px solid ${({ theme }) => theme.colors.lightText};

    p {
      display: block;
      font-size: 12px;
      color: ${({ theme }) => theme.colors.text};
      text-align: center;
      padding: ${({ theme }) => theme.spacing.xsmall} 0;
      margin: 0;

      span {
        font-size: 14px;
        font-weight: bold;
        margin-right: 4px;
      }
    }

    button {
      display: block;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
      background: transparent;
      width: 100%;
      height: auto;
      margin-top: ${({ theme }) => theme.spacing.base};
      padding: ${({ theme }) => theme.spacing.small};
      border-radius: ${({ theme }) => theme.spacing.small};
      cursor: pointer;

      &.is-selected {
        border: 1px solid ${({ theme }) => theme.colors.selectedColor};
        color: #fff;
        background: ${({ theme }) => theme.colors.selectedColor};
      }
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
    img {
      width: 116px;
      height: 116px;
      margin: -50px auto 0 auto;
    }

    .name {
      font-size: 14px;
    }

    .login {
      font-size: 10px;
    }

    .price {
      font-size: 36px;
    }

    footer p {
      font-size: 14px;
    }
  }
`;
