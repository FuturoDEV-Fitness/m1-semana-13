import { useContext } from "react";
import { Link } from "react-router-dom";

import styles from "./index.module.css";
import { ProductsContext } from "../../../contexts/products";

const products = [
 { id: 1, name: "Macarrão", price: 5.99 },
 { id: 1, name: "Maionese", price: 10.99 },
 { id: 1, name: "Energético", price: 7.99 }
];

function ProductsList() {
 //  Usando o contexto e pegando os valores dele
 const { cartItems, addToCart } = useContext(ProductsContext);

 return (
  <div>
   <header>
    <div className={styles.headerItems}>
     <h2>Produtos</h2>
     <button>
      <Link to="/counter-hook">Hook counter</Link>
     </button>
    </div>
    <button>
     <Link to="/shop-cart">Items no carrinho {cartItems.length}</Link>
    </button>
   </header>

   <div className={styles.productsList}>
    {products.map((product, index) => (
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
