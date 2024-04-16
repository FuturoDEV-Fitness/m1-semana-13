import { Link } from "react-router-dom";

import styles from "./index.module.css";

function ShopCart() {
 return (
  <div>
   <header>
    <h2>Carrinho de Compras</h2>
   </header>

   <div className="page-content">
    <div className={styles.cartList}></div>

    <button>
     <Link to="/">Ver produtos</Link>
    </button>
   </div>
  </div>
 );
}

export default ShopCart;
