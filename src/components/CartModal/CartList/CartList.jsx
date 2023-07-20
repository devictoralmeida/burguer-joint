/* eslint-disable react/prop-types */
import { StyledCartList } from "./style";
import CartProduct from "../CartProduct/CartProduct";
import { StyledParagraph } from "../../../styles/typography";

const CartList = ({ cartProducts, setCartProducts }) => {
  return (
    <StyledCartList>
      {cartProducts.length > 0 ? (
        cartProducts.map((product) => (
          <CartProduct
            key={product.id}
            product={product}
            setCartProducts={setCartProducts}
            cartProducts={cartProducts}
          />
        ))
      ) : (
        <StyledParagraph fontSize="big" fontWeight="bold">
          Seu carrinho está vazio
        </StyledParagraph>
      )}
    </StyledCartList>
  );
};

export default CartList;
