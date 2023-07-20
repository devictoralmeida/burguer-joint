import styled, { css } from "styled-components";

export const HeadlineStyles = css`
  font-family: var(--font-primary);

  color: ${({ fontColor }) =>
    fontColor === "gray" ? "var(--colorGrey300)" : "var(--colorGrey600)"};
  font-weight: ${({ fontWeight }) => (fontWeight === "bold" ? 700 : 400)};
  ${({ fontSize }) => {
    switch (fontSize) {
      case "big":
        return css`
          font-size: 1.625rem;
        `;
      case "medium":
        return css`
          font-size: 1.375rem;
        `;

      case "small":
        return css`
          font-size: 1.125rem;
        `;
    }
  }}
`;

export const StyledHeadline1 = styled.h1`
  ${HeadlineStyles};
`;

export const StyledHeadline2 = styled.h2`
  ${HeadlineStyles};
`;

export const StyledHeadline3 = styled.h3`
  ${HeadlineStyles};
`;

export const StyledHeadline = styled.h4`
  ${HeadlineStyles};
`;

export const ParagraphStyles = css`
  font-family: var(--font-primary);
  color: var(--colorGrey300);
  font-weight: ${({ fontWeight }) => (fontWeight === "regular" ? 400 : 600)};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "big":
        return css`
          font-size: 1rem;
        `;
      case "medium":
        return css`
          font-size: 0.875rem;
        `;

      case "small":
        return css`
          font-size: 0.75rem;
        `;
    }
  }}
`;

export const StyledParagraph = styled.p`
  ${ParagraphStyles}
`;
