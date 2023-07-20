import styled from "styled-components";

export const StyledCartTotal = styled.div`
  padding: 1rem;
  width: 100%;
  border-top: 2px solid var(--colorGrey100);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .price {
    color: var(--colorColorPrimary);
  }

  .remove-products {
    width: 100%;
    margin-top: 1.25rem;
  }

  .remove-products:hover {
    background-color: var(--colorColorPrimary);
    border: 2px solid transparent;
    color: var(--colorGrey100);
  }
`;
