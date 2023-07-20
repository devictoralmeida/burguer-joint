import styled, { css } from "styled-components";

const InputDefaultStyles = css`
  height: 3.75rem;
  width: 100%;
  font-family: var(--font-primary);
  font-weight: 400;
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0rem 0.625rem 0rem 1.25rem;
  background-color: #ffffff;
  color: var(--colorGrey600);
  transition: 0.3s;
  outline: 2px solid transparent;


  :focus {
    outline: 2px solid var(--colorColorSecondary);
  }
`;

export const StyledSearchInput = styled.input`
  ${InputDefaultStyles}
`;
