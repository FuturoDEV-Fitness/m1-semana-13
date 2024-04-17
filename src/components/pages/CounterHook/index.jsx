import { Link } from "react-router-dom";
import useCounter from "../../../hooks/useCounter";

import styles from "./index.module.css";

function CounterHook() {
 const [leite, addLeite] = useCounter();
 const [manga, addManga] = useCounter();

 return (
  <div>
   <header>
    <h2>Hook useCounter</h2>
    <button>
     <Link to="/">Voltar para produtos</Link>
    </button>
   </header>

   <h3>Carrinho de compras</h3>
   <div className={styles.content}>
    <div>
     <div>Leite 4.99 - {leite} unidades</div>
     <button onClick={() => addLeite()}>Adicionar +1</button>
    </div>

    <div>
     <div>Manga 12.99 - {manga} unidades</div>
     <button onClick={() => addManga()}>Adicionar +1</button>
    </div>

    <div>
     <div>Leite 4.99 - {leite} unidades</div>
     <button onClick={() => addLeite()}>Adicionar +1</button>
    </div>

    <div>
     <div>Manga 12.99 - {manga} unidades</div>
     <button onClick={() => addManga()}>Adicionar +1</button>
    </div>

    <div>
     <div>Leite 4.99 - {leite} unidades</div>
     <button onClick={() => addLeite()}>Adicionar +1</button>
    </div>

    <div>
     <div>Manga 12.99 - {manga} unidades</div>
     <button onClick={() => addManga()}>Adicionar +1</button>
    </div>
   </div>
  </div>
 );
}

export default CounterHook;
