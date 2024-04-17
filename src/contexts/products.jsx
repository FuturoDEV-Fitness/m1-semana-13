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

 //  Criação de uma função para cuidar da lógica de adicionar um item ao carrinho
 function addToCart(product) {
  // Padrão de atualizador do useState
  setCartItems((c) => [...c, product]);
 }

 //  Limpar o carrinho
 function cleanCart() {
  setCartItems([]);
 }

 return (
  // Faço referência a const que guarda o contexto para acessar seu Provider e passar os valores que serão disponibilizados no contexto
  <ProductsContext.Provider value={{ cartItems, addToCart, cleanCart }}>
   {children}
  </ProductsContext.Provider>
 );
}

export default ProductsContextProvider;
