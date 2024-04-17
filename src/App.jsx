import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ShopCart from "./components/pages/ShopCart";
import ProductsList from "./components/pages/ProductsList";
import CounterHook from "./components/pages/CounterHook";
import AllContextsProvider from "./contexts";

function App() {
 const router = createBrowserRouter([
  {
   path: "/",
   element: <ProductsList />
  },
  {
   path: "shop-cart",
   element: <ShopCart />
  },
  {
   path: "counter-hook",
   element: <CounterHook />
  }
 ]);

 return (
  <AllContextsProvider>
   <RouterProvider router={router} />
  </AllContextsProvider>
 );
}

export default App;
