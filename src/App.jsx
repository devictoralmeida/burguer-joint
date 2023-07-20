import { GlobalStyle } from "./styles/globalStyles";
import { StyledContainer } from "./styles/grid";
import Header from "./components/Header/Header";
import CartModal from "./components/CartModal/CartModal";
import ProductList from "./components/ProductList/ProductList";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "./services/api";
import { StyledLoaderContainer } from "./styles/grid";
import { StyledHeadline2 } from "./styles/typography";
import NoResults from './assets/Monitoraggio_non_fatto.svg'

const App = () => {
  const localCartList = localStorage.getItem("@kenzieBurguer-cartProducs");

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState(
    localCartList ? JSON.parse(localCartList) : []
  );
  const [search, setSearch] = useState("");
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/products/?q=${search}`);
        setProducts(response.data);
      } catch (error) {
        toast.error("Algo deu errado, tente novamente mais tarde!", {
          className: "toast-error",
        });
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [search]);

  useEffect(() => {
    localStorage.setItem(
      "@kenzieBurguer-cartProducs",
      JSON.stringify(cartProducts)
    );
  }, [cartProducts]);

  return (
    <>
      <GlobalStyle />
      {isModal ? (
        <CartModal
          setIsModal={setIsModal}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
      ) : null}
      <Header
        callback={(inputSearch) => setSearch(inputSearch)}
        cartProducts={cartProducts}
        setIsModal={setIsModal}
        setProducts={setProducts}
        setSearch={setSearch}
      />
      <main>
          {loading ? (
            <StyledLoaderContainer className="loader-div">
              <HashLoader color="#BF0404" />
            </StyledLoaderContainer>
          ) : (
            <StyledContainer>
              {products.length >= 1 ? (
                <ProductList
                products={products}
                setCartProducts={setCartProducts}
                cartProducts={cartProducts}
              />
              ) : (
                <div className="no-results">
                  <img src={NoResults} alt="Imagem de uma lupa triste, pois a busca não teve resultados" />
                  <StyledHeadline2 color="gray" fontWeight='bold' fontSize='small'>Não há itens que condizem com sua busca</StyledHeadline2>
                </div>
              )}
            </StyledContainer>
            )}
      </main>
      <ToastContainer />
    </>
  );
};

export default App;
