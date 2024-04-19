import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.css";
import { ProductsContext } from "../../../contexts/products";

function ProductsList() {
 //  Usando o contexto e pegando os valores dele
 //  ETAPA 4.1 - LISTA A PARTIR DO FORM: importar listagem do contexto
 const { cartItems, addToCart, productsList } = useContext(ProductsContext);

 return (
  <div>
   <header>
    <div className={styles.headerItems}>
     <h2>Produtos</h2>
     <button>
      <Link to="/counter-hook">Hook counter</Link>
     </button>
     <button>
      <Link to="/register-product">Registrar produto</Link>
     </button>
    </div>
    <button>
     <Link to="/shop-cart">Items no carrinho {cartItems.length}</Link>
    </button>
   </header>

   <div className={styles.productsList}>
    {/* ETAPA 4.2 - LISTA A PARTIR DO FORM: ler listagem na exibição */}
    {productsList.map((product, index) => (
     <div key={`product-list-${product.id}=${index}`}>
      <h3>
       {product.name} - R$ {product.price}
      </h3>
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
     </div>
    ))}
   </div>
  </div>
 );
}

export default ProductsList;
