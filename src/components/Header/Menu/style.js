import styled from "styled-components";

export const StyledMenu = styled.ul`
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`

export const StyledMenuItem = styled.li`
    padding: 0.5rem 1rem;
    color: #ffffff;
    background-color: var(--colorColorPrimary);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    border: none;
    transition: 300ms;
    opacity: 0.8;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        opacity: 1;
    }
`