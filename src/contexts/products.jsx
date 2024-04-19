/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

// ETAPA 1: CRIAR O CONTEXTO ✅
// ETAPA 2: CRIAR O PROVIDER ✅
// ETAPA 3: ENVOLVER OS COMPONENTES NECESSÁRIOS COM O PROVIDER ✅
// ETAPA 4: USAR OS DADOS DO CONTEXTO E SER FELIZ ✅

// Criação do contexto
export const ProductsContext = createContext();

// Criação de um provider para gerenciar o contexto
function ProductsContextProvider({ children }) {
 //  Criação do estado para guardar os itens do carrinho
 const [cartItems, setCartItems] = useState([]);
 //  ETAPA 1 - LISTA A PARTIR DO FORM: criar estado
 const [productsList, setProductsList] = useState([
  { id: 1, name: "Macarrão", price: 5.99 },
  { id: 1, name: "Maionese", price: 10.99 },
  { id: 1, name: "Energético", price: 7.99 }
 ]);

 //  Criação de uma função para cuidar da lógica de adicionar um item ao carrinho
 function addToCart(product) {
  // Padrão de atualizador do useState
  setCartItems((c) => [...c, product]);
 }

 //  Limpar o carrinho
 function cleanCart() {
  setCartItems([]);
 }

 //  ETAPA 2 - LISTA A PARTIR DO FORM: função que adicionar o novo produto na listagem
 function addProductToList(product) {
  setProductsList((p) => [...p, { ...product, id: p.length + 1 }]);
 }

 return (
  //  ETAPA 3 - LISTA A PARTIR DO FORM: Disponibilizar função e estado nos valores do contexto
  // ProductsContext.Provider: Faço referência a const que guarda o contexto para acessar seu Provider e passar os valores que serão disponibilizados no contexto
  <ProductsContext.Provider
   value={{ cartItems, addToCart, cleanCart, addProductToList, productsList }}>
   {children}
  </ProductsContext.Provider>
 );
}

export default ProductsContextProvider;
