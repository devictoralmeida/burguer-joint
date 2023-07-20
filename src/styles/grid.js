import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem;

  .no-results {
    display: flex;
    height: 40vh;
    gap: 2rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .no-results img {
    width: 200px;
    object-fit: contain;
  }
`;

export const StyledLoaderContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
