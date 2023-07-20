/* eslint-disable react/prop-types */
import { StyledList } from "./style";
import ProductCard from "./ProductCard/ProductCard";

const ProductList = ({ products, setCartProducts, cartProducts }) => {
  return (
    <StyledList>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
        />
      ))}
    </StyledList>
  );
};

export default ProductList;
