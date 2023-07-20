import styled, { css } from "styled-components";

export const StyledButtonPrimary = styled.button`
  ${({ btnHeight }) => {
    if (btnHeight === "big") {
      return css`
        height: 3.75rem;
      `;
    } else {
      return css`
        height: 2.5rem;
      `;
    }
  }}
  width: 8.125rem;
  background-color: var(--colorColorPrimary);
  padding: 0px 1.25rem;
  color: #ffffff;
  border: 2px solid var(--colorColorPrimary);
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  cursor: pointer;
`;

export const StyledButtonSecondary = styled.button`
  ${({ btnHeight }) => {
    if (btnHeight === "big") {
      return css`
        height: 3.75rem;
      `;
    } else {
      return css`
        height: 2.5rem;
      `;
    }
  }}
  width: 8.125rem;
  background-color: var(--colorGrey100);
  padding: 0px 1.25rem;
  color: var(--colorGrey300);
  border: 2px solid var(--colorGrey100);
  font-family: var(--font-primary);
  font-weight: 600;
  font-size: 1rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  cursor: pointer;
`;
