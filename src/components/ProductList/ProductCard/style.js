import styled from "styled-components";

export const StyledCard = styled.li`
  width: clamp(200px, 100%, 300px);
  min-width: 200px;
  height: 346px;
  border: 2px solid var(--colorGrey100);
  background-color: #ffffff;
  border-radius: 0.3125rem;
  transition: 0.3s;

  picture {
    width: 100%;
    height: 150px;
    display: flex;
    background-color: transparent;
    justify-content: center;
  }

  picture > img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }

  .product-data {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

  .product-price {
    font-family: var(--font-primary);
    font-weight: 600;
    font-size: 0.875rem;
    color: var(--colorColorPrimary);
  }

  :hover {
    border: 2px solid var(--colorColorSecondary);
    transform: scale(1.1);
  }

  :hover .card-btn {
    background-color: var(--colorColorPrimary);
    border: 2px solid var(--colorColorPrimary);
    color: #ffffff;
  }

  .card-btn {
    width: 106px;
    margin-top: 0.5rem;
    height: 40px;
    font-weight: 600;
    font-size: 0.875rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    opacity: 0.8;
  }

  .card-btn:hover {
    border: 2px solid transparent;
    opacity: 1;
  }
`;
