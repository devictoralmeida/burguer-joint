/* eslint-disable react/prop-types */
import { StyledCartTotal } from "./style";
import { StyledParagraph } from "../../../styles/typography";
import { StyledButtonSecondary } from "../../../styles/button";
import { toast } from "react-toastify";

const CartTotal = ({ setCartProducts, totalValue }) => {
  const handleRemoveAll = () => {
    setCartProducts([]);
    toast.success("Todos os produtos foram removidos do carrinho!", {
      className: "toast-sucess",
    });
  };

  return (
    <StyledCartTotal>
      <StyledParagraph fontSize="medium" fontWeight="bold">
        Total
      </StyledParagraph>
      <StyledParagraph fontSize="medium" fontWeight="bold" className="price">
        {totalValue.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </StyledParagraph>
      <StyledButtonSecondary
        className="remove-products"
        btnHeight="big"
        onClick={() => handleRemoveAll()}
      >
        Remover todos
      </StyledButtonSecondary>
    </StyledCartTotal>
  );
};

export default CartTotal;
