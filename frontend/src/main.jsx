import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import all of the pages
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
import Collection from "./pages/Collection.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Order from "./pages/Order.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Product from "./pages/Product.jsx";
import { ShopContext } from "./context/ShopContext.jsx";
import ShopContextProvider from "./context/ShopContextProvider.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/collection", element: <Collection /> },
      { path: "/login", element: <Login /> },
      { path: "/order", element: <Order /> },
      { path: "/place-order", element: <PlaceOrder /> },
      { path: "/product", element: <Product /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
      {/* <ShopContext /> */}
    </ShopContextProvider>
  </StrictMode>
);
