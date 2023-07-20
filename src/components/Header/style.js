import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  max-width: 1350px;
  background-color: #f5f5f5;
  margin: 0 auto;

  .logo-cart {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .logo-box {
    width: 159px;
    height: 100%;
  }

  .logo-box img {
    width: 100%;
  }

  .cart-box {
    position: relative;
    width: 36px;
    height: 39px;
    display: flex;
    align-items: center;
  }

  .cart-icon {
    height: 25px;
    width: 25px;
    cursor: pointer;
  }

  .cart-quantity {
    position: absolute;
    top: -5px;
    right: 0px;
    width: 20px;
    height: 24px;
    background-color: var(--colorColorPrimary);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.4375rem;
  }

  .cart-quantity > span {
    font-family: var(--font-primary);
    font-weight: 900;
    font-size: 0.875rem;
    color: #ffffff;
  }

  .form-div {
    width: 100%;
    position: relative;
    order: 1;
  }

  .search-button {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 53px;
    max-width: 53px;
    min-height: 40px;
    background-color: var(--colorColorPrimary);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    border: none;
    transition: 300ms;
    opacity: 0.8;
  }

  .search-button:hover {
    opacity: 1;
  }

  @media (min-width: 600px) {
    flex-direction: row;

    .form-div {
      max-width: 22.8125rem;
    }
  }
`;
