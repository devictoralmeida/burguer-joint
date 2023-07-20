/* eslint-disable react/prop-types */
import { StyledMenu, StyledMenuItem } from "./style";

const Menu = ({setSearch}) => {
  
  return (
    <StyledMenu>
      <StyledMenuItem onClick={() => setSearch("")}>Todos</StyledMenuItem>
      <StyledMenuItem value="Sanduíches" onClick={(e) => setSearch(e.target.textContent)}>Sanduíches</StyledMenuItem>
      <StyledMenuItem value="Bebidas" onClick={(e) => setSearch(e.target.textContent)}>Bebidas</StyledMenuItem>
    </StyledMenu>
  );
};

export default Menu;
