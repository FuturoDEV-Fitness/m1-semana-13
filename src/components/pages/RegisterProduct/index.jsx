import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../../contexts/products";

import styles from "./index.module.css";

function RegisterProduct() {
 const {
  register,
  handleSubmit,
  formState: { errors }
 } = useForm();
 //  ETAPA 5.1 - LISTA A PARTIR DO FORM: capturar a função de adicionar item na lista disponibilizada no contexto
 const { addProductToList } = useContext(ProductsContext);

 function onSubmit(formValue) {
  console.log("\nValores do formulário: \n", formValue);
  //  ETAPA 5.2 - LISTA A PARTIR DO FORM: utilizar função de adicionar item na lista disponibilizada no contexto
  addProductToList(formValue);
 }

 return (
  <div>
   <header>
    <h2>Registrar produtos</h2>

    <button>
     <Link to="/">Ver produtos</Link>
    </button>
   </header>

   <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
    <div>
     <label htmlFor="name">Nome do produto</label>
     <input
      type="text"
      placeholder={errors?.name?.message || "Nome do produto"}
      {...register("name", {
       required: "Por favor, insira o nome do produto",
       maxLength: {
        value: 100,
        message: "O nome do produto deve ter no máximo 100 caracteres"
       }
      })}
     />
     {errors.name && <p>{errors.name.message}</p>}
    </div>

    <div>
     <label htmlFor="price">Preço do produto</label>
     <input
      type="text"
      {...register("price", {
       required: "Por favor, insira o preço do produto"
      })}
     />
     {errors.price && <p>{errors.price.message}</p>}
    </div>

    {/* campo numerico 
    Duração estimada: campo numérico obrigatório com limite de 4 caracteres;
    */}
    <div>
     <label htmlFor="duration">Duração</label>
     <input
      type="number"
      step={0.01}
      {...register("duration", {
       required: "Por favor, informe o tempo de trilha"
      })}
     />
     {errors.duration && <p>{errors.duration.message}</p>}
    </div>

    {/* campo de select 
    Dificuldade:  campo de select obrigatório com as opções: Iniciante, Intermediário e Difícil.
    */}
    <div>
     <label htmlFor="duration">Dificuldade</label>
     <select {...register("difficulty")}>
      <option value="Iniciante">Iniciante</option>
      <option value="Intermediário">Intermediário</option>
      <option value="Difícil">Difícil</option>
     </select>
    </div>

    <button type="submit">Cadastrar</button>
   </form>
  </div>
 );
}

export default RegisterProduct;
