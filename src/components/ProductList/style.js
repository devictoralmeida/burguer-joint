import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  width: 100%;
  overflow-x: auto;
  gap: 2rem;
  padding: 1.5rem 1rem;
  -webkit-animation: slide-right 1s ease-in-out both;
  animation: slide-right 1s ease-in-out both;

  @-webkit-keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
    }
  }
  @keyframes slide-right {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px);
    }
  }

  @media (min-width: 695px) {
    justify-content: space-between;
    flex-wrap: wrap;
    overflow: hidden;
  }

  @media (min-width: 1360px) {
    justify-content: flex-start;
  }
`;
