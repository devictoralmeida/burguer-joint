/* eslint-disable react/prop-types */
import { StyledCard } from "./style";
import { toast } from "react-toastify";
import { StyledHeadline3, StyledParagraph } from "../../../styles/typography";
import { StyledButtonSecondary } from "../../../styles/button";

const ProductCard = ({ product, setCartProducts, cartProducts }) => {
  const handleAddToCart = () => {
    if (cartProducts.some((findedProduct) => findedProduct.id === product.id)) {
      const newProductsCard = cartProducts.map((newProduct) => {
        if (newProduct.id === product.id) {
          return { ...newProduct, quantity: newProduct.quantity + 1 };
        } else {
          return newProduct;
        }
      });

      setCartProducts(newProductsCard);
    } else {
      const alteredProduct = { ...product, quantity: 1 };
      setCartProducts((cartProducts) => [...cartProducts, alteredProduct]);
      toast.success(`Produto ${product.name} foi adicionado ao carrinho!`, {
        className: "toast-sucess",
      });
    }
  };

  return (
    <StyledCard>
      <picture>
        <img src={product.img} alt={`Foto do produto ${product.name}`} />
      </picture>
      <div className="product-data">
        <StyledHeadline3 fontSize="small" fontWeight="bold">
          {product.name} 
        </StyledHeadline3>
        <StyledParagraph fontSize="small" fontWeight="regular">
          {product.category}
        </StyledParagraph>
        <span className="product-price">
          {product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <StyledButtonSecondary
          btnHeight="big"
          className="card-btn"
          onClick={handleAddToCart}
        >
          Adicionar
        </StyledButtonSecondary>
      </div>
    </StyledCard>
  );
};

export default ProductCard;
