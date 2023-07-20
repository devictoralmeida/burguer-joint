/* eslint-disable react/prop-types */
import { StyledHeader } from "./style";
import Logo from "../../assets/burguer-logo-1.png"
import CartIcon from "../../assets/cart.svg";
import { StyledSearchInput } from "../../styles/input";
import SearchIcon from "../../assets/lupa.svg";
import { useState } from "react";
import styles from "./Header.module.css";
import Menu from './Menu/Menu'

const Header = ({ callback, cartProducts, setIsModal, setSearch }) => {
  const [inputSearch, setInputSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    callback(inputSearch);
  };

  return (
    <div className={styles.header_overlay}>
      <StyledHeader>
        <div className="logo-cart">
          <div className="logo-box">
            <img src={Logo} alt="logo do burguer joint que é um hamburguer com fumaça saindo"/>
          </div>
          <div className="cart-box">
            <img
              src={CartIcon}
              alt="Ícone Carrinho"
              onClick={() => setIsModal(true)}
              className="cart-icon"
            />
            <div className="cart-quantity">
              <span>{cartProducts.length}</span>
            </div>
          </div>
        </div>
        <form className="form-div" onSubmit={handleSubmit}>
          <StyledSearchInput
            placeholder="Digitar Pesquisa"
            className="search-input"
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <button className="search-button">
            <img src={SearchIcon} alt="Icone pesquisa" />
          </button>
        </form>
        <Menu setSearch={setSearch}/>
      </StyledHeader>
    </div>
  );
};

export default Header;
