import { Link } from "react-router-dom";

import styles from "./index.module.css";

function ProductsList() {
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
     <Link to="/shop-cart">Items no carrinho</Link>
    </button>
   </header>

   <div className={styles.productsList}></div>
  </div>
 );
}

export default ProductsList;
