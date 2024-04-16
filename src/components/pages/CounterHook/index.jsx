import { Link } from "react-router-dom";

import styles from "./index.module.css";

function CounterHook() {
 return (
  <div>
   <header>
    <h2>Hook useCounter</h2>
    <button>
     <Link to="/">Voltar para produtos</Link>
    </button>
   </header>

   <div className={styles.content}>
    <h3>Carrinho de compras</h3>
    <div></div>
   </div>
  </div>
 );
}

export default CounterHook;
