/* eslint-disable react/prop-types */
import { StyledModal } from "./style";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import styles from "./CartModal.module.css";
import { StyledHeadline3 } from "../../styles/typography";
import CloseModalButton from "../../assets/close.svg";
import { useOutClick } from "../../hooks/useOutClick";
import { useKeydownPress } from "../../hooks/useKeydownPress";

const CartModal = ({ setIsModal, setCartProducts, cartProducts }) => {
  const modalRef = useOutClick(() => setIsModal(false));

  const buttonRef = useKeydownPress("Escape", (element) => element.click());

  const totalValue = cartProducts.reduce((acc, currProduct) => {
    return acc + currProduct.price * currProduct.quantity;
  }, 0);

  return (
    <div role="dialog" className={styles.modalOverlay}>
      <StyledModal ref={modalRef}>
        <header>
          <StyledHeadline3
            fontSize="small"
            fontWeight="bold"
            className="header-title"
          >
            Carrinho de compras
          </StyledHeadline3>
          <img
            src={CloseModalButton}
            alt="Button to close the pop-up"
            onClick={() => setIsModal(false)}
            className="close-btn"
            ref={buttonRef}
          />
        </header>
        <CartList
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
        <CartTotal setCartProducts={setCartProducts} totalValue={totalValue} />
      </StyledModal>
    </div>
  );
};

export default CartModal;
