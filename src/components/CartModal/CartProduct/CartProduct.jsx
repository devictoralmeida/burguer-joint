/* eslint-disable react/prop-types */
import { StyledCartProduct } from "./style";
import { StyledHeadline3 } from "../../../styles/typography.js";
import Trash from "../../../assets/trash.svg";
import { toast } from "react-toastify";

const CartProduct = ({ setCartProducts, product, cartProducts }) => {
  const handleRemoveItem = () => {
    const newCartProducts = cartProducts.filter(
      (item) => item.id !== product.id
    );
    setCartProducts(newCartProducts);
    toast.success(`Produto ${product.name} foi removido ao carrinho!`, {
      className: "toast-sucess",
    });
  };

  const addProductQuantity = () => {
    const newProductsCard = cartProducts.map((newProduct) => {
      if (newProduct.id === product.id) {
        return { ...product, quantity: newProduct.quantity + 1 };
      } else {
        return newProduct;
      }
    });

    setCartProducts(newProductsCard);
  };

  const removeProductQuantity = () => {
    if (product.quantity === 1) {
      const newCartProducts = cartProducts.filter(
        (item) => item.id !== product.id
      );
      setCartProducts(newCartProducts);
    } else {
      const newProductsCard = cartProducts.map((newProduct) => {
        if (newProduct.id === product.id) {
          return { ...newProduct, quantity: newProduct.quantity - 1 };
        } else {
          return newProduct;
        }
      });
      setCartProducts(newProductsCard);
    }
  };

  return (
    <StyledCartProduct>
      <picture>
        <img src={product.img} alt={`Foto do produto ${product.name}`} />
      </picture>
      <div className="product-data">
        <StyledHeadline3 fontSize="small" fontWeight="bold">
          {product.name} 
        </StyledHeadline3>
        <div className="quantity-container">
          <button onClick={() => addProductQuantity()} className="quantity">
            +
          </button>
          <span>{product.quantity}</span>
          <button onClick={() => removeProductQuantity()} className="quantity">
            -
          </button>
        </div>
      </div>
      <img
        src={Trash}
        alt="Icon to remove the icon from the cart"
        onClick={handleRemoveItem}
        className="remove-btn"
      />
    </StyledCartProduct>
  );
};

export default CartProduct;
