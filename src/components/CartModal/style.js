import styled from "styled-components";

export const StyledModal = styled.div`
  width: 90%;
  max-width: 500px;
  position: relative;
  margin: 0 auto;
  background: white;

  header {
    background-color: var(--colorColorPrimary);
    width: 100%;
    max-width: 500px;
    height: 54px;
    padding: 0.8125rem 1.375rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header-title {
    color: #ffffff;
  }

  .close-btn {
    cursor: pointer;
    transition: 0.3s;
  }

  .close-btn:hover {
    transform: scale(1.3);
  }
`;
