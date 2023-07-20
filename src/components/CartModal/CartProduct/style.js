import styled from "styled-components";

export const StyledCartProduct = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  -webkit-animation: scale-up-center 0.4s ease-out both;
  animation: scale-up-center 0.4s ease-out both;

  picture {
    width: 82px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture img {
    width: 55px;
    height: 54px;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .quantity-container {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .quantity {
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    background-color: var(--colorColorPrimary);
    color: #ffffff;
    border-radius: 4px;
    transition: 500ms;
    opacity: 0.8;
  }

  .quantity:hover {
    opacity: 1;
  }

  .quantity-container span {
    color: var(--colorColorPrimary);
    font-family: var(--font-primary);
    font-size: 1.125rem;
    font-weight: 600;
  }

  .remove-btn {
    cursor: pointer;
    transition: 300ms;
    transition: 0.3s;
  }

  .remove-btn:hover {
    transform: scale(1.15);
  }


  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
`;
