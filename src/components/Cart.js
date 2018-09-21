import React from 'react';
import styled from 'styled-components';

import Container from 'components/Container';

export default ({ total, selectedMembers, handleCheckout, successMessage }) => (
  <Cart
    className={
      (selectedMembers.length === 0 ? 'is-empty' : '') +
      (successMessage ? 'show-message' : '')
    }
  >
    <Container>
      <p className="total">
        <span>$ {total}</span>({selectedMembers.length} member
        {selectedMembers.length > 1 && 's'})
      </p>
      <button onClick={handleCheckout}>Checkout</button>
      <p className="message">{successMessage}</p>
    </Container>
  </Cart>
);

const Cart = styled.div`
  width: 100vw;
  height: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  box-shadow: 0 -2px 4px 0 rgba(0, 0, 0, 0.1);
  transition: bottom ease .3s;

  &.is-empty {
    bottom: -100px;
  }

  &.show-message {
    .total, button {
      opacity: 0;
    }

    .message {
      opacity: 1;
      top: ${({ theme }) => theme.spacing.base};
    }
  }

  & > div {
    display: flex;
    justify-content: space-between;
    padding: ${({ theme }) => theme.spacing.base};
  }

  .total {
    font-size: 14px;
    margin: 0;
    transition: opacity ease .3s;

    span {
      display: block;
      font-size: 24px;
      font-weight: bold;
      margin-right: ${({ theme }) => theme.spacing.xsmall};
    }
  }

  .message {
    position: absolute;
    width: 100%;
    text-align: center;
    top: 100px;
    left: 0;
    opacity: 0;
    transition: top ease .3s, opacity ease .3s;
  }

  button {
      display: block;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: #fff;
      background: ${({ theme }) => theme.colors.selectedColor};
      padding: ${({ theme }) =>
        theme.spacing.small + ' ' + theme.spacing.xlarge};
      border-radius: ${({ theme }) => theme.spacing.small};
      cursor: pointer;
      transition: opacity ease .3s;
    }
  }
`;
