import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";

function App() {
  let user = false;

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products/:category" element={<ProductList />} />

      <Route path="/product/:id" element={<Product />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/login" element={user ? <Navigate to={"/"} /> : <Login />} />

      <Route
        path="/register"
        element={user ? <Navigate to={"/"} /> : <Register />}
      />
    </Routes>
  );
}

export default App;
