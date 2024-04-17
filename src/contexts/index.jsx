/* eslint-disable react/prop-types */
import ProductsContextProvider from "./products";

function AllContextsProvider({ children }) {
 return <ProductsContextProvider>{children}</ProductsContextProvider>;
}

export default AllContextsProvider;
