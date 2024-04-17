import { Link } from "react-router-dom";

import styles from "./index.module.css";
import { useContext } from "react";
import { ProductsContext } from "../../../contexts/products";

function ShopCart() {
 const { cartItems, cleanCart } = useContext(ProductsContext);
 return (
  <div>
   <header>
    <h2>Carrinho de Compras</h2>
   </header>

   <div className="page-content">
    <h3>Você possui {cartItems.length} itens no carrinho</h3>

    <div className={styles.cartList}>
     {cartItems.map((product, index) => (
      <div key={`product-list-${product.id}=${index}`}>
       <h3>
        {product.name} - R$ {product.price}
       </h3>
      </div>
     ))}
    </div>

    <button>
     <Link to="/" onClick={() => cleanCart()}>
      Finalizar compra
     </Link>
    </button>
   </div>
  </div>
 );
}

export default ShopCart;
